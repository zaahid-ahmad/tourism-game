import { getStore } from "@netlify/blobs";

const MAXN = 16, FLOOR = 50, TOTAL = 265, GATES = 53;

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status: status || 200,
    headers: { "content-type": "application/json", "cache-control": "no-store" }
  });
}

function cleanName(v) {
  var n = String(v == null ? "" : v).replace(/[^A-Za-z0-9 .'-]/g, "")
    .replace(/\s+/g, " ").trim().slice(0, MAXN);
  return n.length >= 2 ? n : null;
}

function slug(n) {
  return n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function rank(a, b) {
  return (b.acc - a.acc) || (b.attempted - a.attempted) || (a.deaths - b.deaths) || (a.ts - b.ts);
}

export default async (req) => {
  const store = getStore({ name: "leaderboard", consistency: "strong" });

  if (req.method === "GET") {
    const list = await store.list();
    const results = await Promise.all(
      list.blobs.slice(0, 300).map((b) => store.get(b.key, { type: "json" }).catch(() => null))
    );
    const rows = results.filter(Boolean);
    return json({
      ok: true,
      floor: FLOOR,
      top: rows.filter((r) => r.attempted >= FLOOR).sort(rank).slice(0, 20),
      pending: rows.filter((r) => r.attempted < FLOOR).length
    });
  }

  if (req.method !== "POST") return json({ ok: false }, 405);

  let b;
  try { b = await req.json(); } catch (e) { return json({ ok: false, err: "bad json" }, 400); }

  const name = cleanName(b.name);
  const num = function (k) {
    return Number.isInteger(b[k]) && b[k] >= 0 ? b[k] : -1;
  };
  const at = num("attempted"), cl = num("clean"), de = num("deaths"),
        ga = num("gates"), bs = num("bestStreak");

  /* structural impossibility only — deliberately NOT answer validation, honour system */
  if (!name || at < 1 || cl < 0 || de < 0 || ga < 0 ||
      at > TOTAL || cl > at || ga > GATES || at < ga * 5 || bs > at ||
      (b.mode !== "standard" && b.mode !== "hardcore")) {
    return json({ ok: false, err: "rejected" }, 400);
  }

  const entry = {
    name: name, attempted: at, clean: cl, deaths: de, gates: ga, bestStreak: bs,
    mode: b.mode, done: !!b.done, acc: Math.round((cl / at) * 100), ts: Date.now()
  };

  const key = slug(name);
  const old = await store.get(key, { type: "json" }).catch(() => null);
  if (!old || entry.acc > old.acc || (entry.acc === old.acc && entry.attempted > old.attempted)) {
    await store.setJSON(key, entry);
  }
  return json({ ok: true });
};
