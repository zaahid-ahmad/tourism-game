// scripts/wipe-board.mjs — one-time cleanup for the leaderboard-ownership change (CLAUDE.md §6.6).
// Deletes every key in both the "leaderboard" and "leaderboard-cache" Netlify Blobs stores, so
// every row that exists afterwards is created (and owned, via a PIN) under the new rules.
//
// Run this AFTER deploying the PIN-enforcing board.mjs, not before — deploying first means any
// submission that lands in the gap is rejected by the new server for having no pin, rather than
// recreating an unowned row that this script would then need a second pass to catch.
//
// Usage (run once from the repo root, with your own Netlify credentials in the environment):
//   NETLIFY_SITE_ID=... NETLIFY_AUTH_TOKEN=... node scripts/wipe-board.mjs --yes-wipe-everything
//
// NETLIFY_SITE_ID: Site settings → General → Site details → Site ID.
// NETLIFY_AUTH_TOKEN: a personal access token — User settings → Applications → New access token.
// Never commit either value. This script reads them only from the environment.
import { getStore } from "@netlify/blobs";

const CONFIRM_FLAG = "--yes-wipe-everything";

if (!process.argv.includes(CONFIRM_FLAG)) {
  console.error(
    "Refusing to run without " + CONFIRM_FLAG + ".\n" +
    "This permanently deletes every stored leaderboard row and the read cache.\n" +
    "Re-run as:\n  node scripts/wipe-board.mjs " + CONFIRM_FLAG
  );
  process.exit(1);
}

const siteID = process.env.NETLIFY_SITE_ID;
const token = process.env.NETLIFY_AUTH_TOKEN;
if (!siteID || !token) {
  console.error(
    "Missing credentials. Set NETLIFY_SITE_ID and NETLIFY_AUTH_TOKEN in the environment first " +
    "(see the comment at the top of this script for where to find them)."
  );
  process.exit(1);
}

async function wipeStore(name) {
  const store = getStore({ name, siteID, token });
  let n = 0;
  for await (const page of store.list({ paginate: true })) {
    for (const b of page.blobs) {
      await store.delete(b.key);
      n++;
    }
  }
  console.log(name + ": deleted " + n + " key(s).");
}

await wipeStore("leaderboard");
await wipeStore("leaderboard-cache");
console.log("Done. The board starts empty; every row from now on is created with a PIN.");
