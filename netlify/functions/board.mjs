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
  return (b.acc - a.acc) || (b.attempted - a.attempted) || (a.deaths - b.deaths) || (a.accTs - b.accTs);
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
      pending: rows.filter((r) => r.attempted < FLOOR).length,
      hc: rows.filter((r) => r.hcGates > 0).sort((a, b) => b.hcGates - a.hcGates || a.hcTs - b.hcTs).slice(0, 20),
      mw: rows.filter((r) => r.mwCorrect > 0).sort((a, b) => b.mwCorrect - a.mwCorrect || a.mwTs - b.mwTs).slice(0, 20)
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
        ga = num("gates"), bs = num("bestStreak"),
        hc = num("hcGates"), mw = num("mwCorrect");

  /* structural impossibility only — deliberately NOT answer validation, honour system.
     attempted may legitimately be 0: a hardcore/Mr Worldwide death wipes the current run's
     seen/clean counts, but S.hcBest/S.mwBest (and S.bestStreak) are lifetime figures that survive
     the wipe, so a report right after dying carries real hc/mw data with attempted:0 — that must
     not be rejected outright, just treated as "no accuracy data this submission" below. */
  if (!name || at < 0 || cl < 0 || de < 0 || ga < 0 ||
      at > TOTAL || cl > at || ga > GATES || at < ga * 5 || (at >= 1 && bs > at) ||
      hc > GATES || mw > TOTAL ||
      (b.mode !== "standard" && b.mode !== "hardcore" && b.mode !== "worldwide")) {
    return json({ ok: false, err: "rejected" }, 400);
  }

  const key = slug(name);
  const old = await store.get(key, { type: "json" }).catch(() => null) || {};

  /* Reaching the ranking floor for the first time always counts as an improvement, regardless of
     accuracy — otherwise an early short/high-accuracy run permanently blocks every later, more
     substantial run from ever being stored (and therefore ever being ranked), since it would
     always compare "worse" on accuracy alone. Once both sides are on the same side of the floor,
     fall back to the existing best-accuracy (tie-broken by more attempted) comparison. A
     no-accuracy-data submission (attempted:0, see above) can never count as an accuracy
     improvement, so it can never touch the stored accuracy fields — hc/mw stay fully independent. */
  const hasAccData = at >= 1;
  const acc = hasAccData ? Math.round((cl / at) * 100) : 0;
  const oldQualifies = (old.attempted || 0) >= FLOOR;
  const newQualifies = hasAccData && at >= FLOOR;
  const accBetter = hasAccData && (
    (newQualifies && !oldQualifies) ||
    (newQualifies === oldQualifies &&
      (!(old.acc > 0) || acc > old.acc || (acc === old.acc && at > (old.attempted || 0)))));
  const hcBetter = hc > (old.hcGates || 0);
  const mwBetter = mw > (old.mwCorrect || 0);

  const entry = {
    name: name,
    attempted: accBetter ? at : old.attempted,
    clean: accBetter ? cl : old.clean,
    deaths: accBetter ? de : old.deaths,
    gates: accBetter ? ga : old.gates,
    bestStreak: accBetter ? bs : old.bestStreak,
    mode: b.mode, done: accBetter ? !!b.done : !!old.done,
    acc: accBetter ? acc : old.acc,
    accTs: accBetter ? Date.now() : (old.accTs || old.ts || Date.now()),
    hcGates: hcBetter ? hc : (old.hcGates || 0),
    hcTs: hcBetter ? Date.now() : (old.hcTs || Date.now()),
    mwCorrect: mwBetter ? mw : (old.mwCorrect || 0),
    mwTs: mwBetter ? Date.now() : (old.mwTs || Date.now())
  };

  await store.setJSON(key, entry);
  return json({ ok: true, improved: { acc: accBetter, hc: hcBetter, mw: mwBetter } });
};
