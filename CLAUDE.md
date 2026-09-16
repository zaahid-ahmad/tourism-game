# analysis.md — PASSPORT: Grade 10 Tourism CLI Game

Technical and content analysis of the current production version of the site, written as a handover for Claude Code.

- **Repo:** `https://github.com/zaahid-ahmad/tourism-game` (branch `main`)
- **Hosting:** Netlify, auto-deploys on every push to `main`
- **Codebase:** one file, `index.html` (about 2,495 lines, about 180 KB). No build step, no dependencies, no backend.
- **Owner:** Zaahid Ahmad Mohamed, CAT teacher, APAX School (Johannesburg)
- **Audience:** Grade 10 Tourism learners (CAPS, South Africa)
- **Content source:** *Via Afrika Tourism Grade 10 Study Guide* (all 8 topics). Every question and every feedback line was pulled from this guide.

---

## 1. What the game is

A text-based, terminal-style revision game with a retro CRT look.

- **Structure:** learners move through **53 "gates"** (levels). Each gate has **5 stages**, and each stage is one multiple-choice question, for **265 questions** in total.
- **Right answer:** a green "gain" line shows the key facts from the study guide, and the learner moves to the next stage.
- **Wrong answer:** the learner "dies". A red explanation shows the right answer and why.
  - **Standard mode:** retry the same stage.
  - **Hardcore mode:** the whole run is wiped and the learner restarts at Gate 01.
- **Other features:** 26 achievements, a "journey" progress bar, typed CLI commands, and an end-of-run debrief that breaks performance down by topic.

The design copies an earlier teacher-made game (`ETS23B3-Venture-RPG.html`): same amber CRT palette, same HUD, same chamber/stage/death loop and same debrief structure.

---

## 2. File layout (`index.html`)

Line numbers are approximate. Use them as a map and search for the section comments to confirm.

| Lines | Section | Notes |
|---|---|---|
| 1–10 | `<!doctype>`, `<head>`, `<title>Passport Tourism Sim</title>`, Google Fonts link | Fonts: **VT323** (CRT display) and **IBM Plex Mono** (body) |
| 11–201 | `<style>` | All CSS inline. Design tokens are on `:root`. |
| 203–262 | Markup | `.shell` (bar, `.hud`, `.journey`, `#screen`, `#choices`, `.inputrow`), `.btnrow`, `#reportArea`, `footer` |
| 264–276 | `var STRAND` | 8 topic definitions |
| 278–1934 | `var CHAMBERS = [...]` | **All game content** (53 gates). Sub-comments mark each topic: `/* ===== TERM 1 · TOURISM SECTORS ===== */` and so on. |
| 1936–1937 | `NCH`, `NST` | Gate count and total stage count, derived from `CHAMBERS` |
| 1939–1973 | `var ACH`, `STRAND_LAST` | Achievement definitions; last gate index per topic |
| 1975–2005 | State: `LS`, `freshRun()`, `S`, load/migrate, `save()` | localStorage persistence |
| 2007–2088 | Helpers: `out`, `clear`, `pad`, `typeInto`, `shuffle`, `stagesDone`, tick drawing, `hud()` | |
| 2090–2132 | Achievement engine: `unlock`, `checkAfterCorrect`, `checkAfterGate` | |
| 2134–2281 | Render and game loop: `boot`, `renderModePick`, `chooseMode`, `renderStage`, `answer` | |
| 2283–2392 | Commands: `cmdHelp`, `cmdMap`, `cmdStats`, `cmdAwards`, `cmdMode`, `runCmd`, event bindings, `newRun`, `askWipe` | |
| 2394–2486 | `endGame()` | Debrief/report HTML |
| 2488–2492 | `boot();` | Entry point |

The JavaScript is plain ES5-style with `var` and `function`, no modules and no framework. Keep that style unless you're doing a deliberate refactor.

---

## 3. Content model

### 3.1 Topics (`STRAND`)

| Key | Name (as shown) | Short | Gates |
|---|---|---|---|
| `sec` | Term 1 · Tourism sectors | Sectors | 1–18 |
| `map` | Term 2 · Map work and tour planning | Map work | 19–25 |
| `dom` | Term 2 · Domestic, regional and international tourism | Domestic | 26–27 |
| `att` | Term 3 · Tourist attractions in South Africa | Attractions | 28–37 |
| `sus` | Term 3 · Sustainable and responsible tourism | Sustainable | 38–42 |
| `mkt` | Term 3 · Marketing | Marketing | 43–44 |
| `cul` | Term 4 · Culture and heritage | Heritage | 45–48 |
| `com` | Term 4 · Communication and customer care | Comms | 49–53 |

The number of gates per topic follows how much content that topic has in the study guide (Term 1 is by far the largest).

### 3.2 Gate schema (`CHAMBERS[i]`)

```js
{
  id: 1,                    // 1-based, MUST equal array index + 1
  strand: "sec",            // key into STRAND
  name: "DEPARTURES HALL",  // uppercase display name
  intro: "…",               // narrative shown when the gate opens (stage 1 only)
  steps: [                  // exactly 5 in the current build
    {
      n: "…",               // narrative line before the question
      q: "…",               // the question
      o: ["correct", "wrong", "wrong", "wrong"],  // exactly 4 options
      // c: 0,              // index of correct option — OMITTED; engine uses (s.c || 0)
      g: "…",               // "gain" text on a correct answer (study-guide summary, green)
      w: "…"                // "why" text on a wrong answer (red), also stored in death log
    }
  ]
}
```

**Content conventions:**

- **The correct answer is always `o[0]`.** `c` is omitted everywhere. The engine shuffles option order on every render (`shuffle()` in `renderStage`), so learners never see a fixed position. If you add `c`, it's respected, but keep the convention consistent.
- **Strings are inserted with `innerHTML`.** Don't put `<` in content. `&` followed by a space is fine.
- **Gain (`g`) lines** start with an uppercase keyword and a colon, e.g. `"GAUTRAIN: rapid transit…"`.
- **Death (`w`) lines** state the right answer first, then the distinction that separates it from the distractors.
- **Spelling is South African English** ("organisation", "programme", "centre").
- **No missing visuals.** Content must never refer to a table, chart, map or diagram that isn't shown. Draw it as simple text inside the string (`.line` uses `white-space: pre-wrap`, so `
` and spaces are kept), or rephrase so no visual is needed.
- **Never mention the study guide in player-facing text** (questions, feedback, report, footer, boot text). Anyone should be able to play, not only Tourism learners. Where a fact is only true "per the guide" (an older count, a disputed location), anchor it with a date or context instead, e.g. "By 2010, how many World Heritage Sites…?"

### 3.3 Gate list

| # | Gate | # | Gate |
|---|---|---|---|
| 1 | DEPARTURES HALL | 28 | EASTERN CAPE, FREE STATE, GAUTENG |
| 2 | THE PASSENGER MANIFEST | 29 | KWAZULU-NATAL |
| 3 | THE ROAD DEPOT | 30 | LIMPOPO |
| 4 | PLATFORM NINE | 31 | MPUMALANGA |
| 5 | THE ROUTE PLANNER | 32 | NORTHERN CAPE |
| 6 | THE CHECK-IN DESK | 33 | NORTH WEST |
| 7 | THE STAR CHAMBER | 34 | WESTERN CAPE |
| 8 | THE RATE CARD | 35 | THE WILD RESERVES |
| 9 | THE SMART ROOM | 36 | SANPARKS |
| 10 | THE FOOD COURT | 37 | THE BORDERLANDS |
| 11 | THE ATTRACTION FLOOR | 38 | THE THREE PILLARS |
| 12 | THE MATCHMAKER | 39 | THE COMMUNITY LEDGER |
| 13 | THE MINISTRY | 40 | THE RESPONSIBLE TRAVELLER |
| 14 | THE GOVERNMENT CORRIDOR | 41 | THE GREENHOUSE |
| 15 | STATE HOLDINGS | 42 | THE CARBON CUTTERS |
| 16 | THE PRIVATE SECTOR | 43 | THE PITCH ROOM |
| 17 | THE WORLD STAGE | 44 | THE RESEARCH DESK |
| 18 | THE PAY COUNTER | 45 | THE CULTURE HALL |
| 19 | THE CHART ROOM | 46 | THE HERITAGE VAULT |
| 20 | THE MERIDIAN | 47 | THE HERITAGE REGISTER |
| 21 | THE MAP LIBRARY | 48 | LOCAL LEGENDS |
| 22 | THE SATELLITE LINK | 49 | THE SWITCHBOARD |
| 23 | THE ATLAS | 50 | THE NETWORK |
| 24 | THE LANDMARKS | 51 | THE MESSAGE LINE |
| 25 | THE ODOMETER | 52 | THE ANNOUNCEMENT HALL |
| 26 | HOME GROUND | 53 | SERVICE EXCELLENCE |
| 27 | THE STATISTICS OFFICE | | |

### 3.4 Where the content deliberately departs from the study guide

These were conscious calls. Keep them unless the owner says otherwise.

1. **International Date Line direction is not tested.** The guide's answer key says crossing the IDL eastward gains a day, which is factually backwards. Gate 20, stage 5 only asks for the IDL's position (180°).
2. **Old place names are kept, with current names in the feedback.** Exam answers still use Nelspruit, Mafikeng, Bisho and Swaziland, so the options keep those names, and the `g` text adds Mbombela, Mahikeng, Bhisho and Eswatini.
3. **Bloukrans Bridge follows the guide's answer key (Eastern Cape).** Western Cape is never offered as an option, and the `g`/`w` text notes it sits on the EC/WC border.
4. **National vs provincial heritage examples are not tested.** The guide's table doesn't clearly show which examples are which. Only the unambiguous facts are used: Grade 1/2/3, KZN Battlefields = Provincial (confirmed by the answer key), and the eight WHS.
5. **"Eleven languages"** follows the guide (Gate 45), worded as "eleven spoken official languages", and the `g` text notes that South African Sign Language became the twelfth in 2023. The WHS count (Gate 24) is anchored "by 2010" (eight).
6. **Guide typo "Walter Sizulu"** is corrected to Walter Sisulu.

**Known content weakness — resolved (2026-09-16).** All 265 questions were rewritten to remove
the length tell and word-matching shortcuts (`difficulty-plan.md` has the full rules and
technique bank). Baseline was 200/265 (75%) strictly-or-tied longest, 181/265 (68%) strictly
longest, with some topics as bad as 96%. After the rewrite: `node scripts/check.js --strict`
gives **FAIL 0** on all 265 questions (3 reviewed warnings — genuine guide phrasing in
Communication, not a hint), and the correct option is strictly longest in at most ~31% of any
topic's questions (cap: 35%). A deterministic guessing-heuristic check ("always pick the
longest option", ties split evenly) lands at 25% overall, matching chance, with no topic above
40%.

---

## 4. State and persistence

- **Storage:** `localStorage`, key **`tourism10.passport.v1`**. Every read and write is wrapped in `try/catch`, and the game runs normally, just without saving, if storage is blocked.
- **Scope:** one browser, one device, one origin. Changing the Netlify subdomain or adding a custom domain resets everyone's progress. On shared lab PCs, GPOs that clear browser data on exit, or temporary/mandatory profiles, also wipe it.

### 4.1 State object `S`

Created by `freshRun(keep)`:

| Field | Type | Scope | Meaning |
|---|---|---|---|
| `ch` | int | run | Index of the current gate (0-based). `NCH` means finished. |
| `st` | int | run | Index of the current stage within the gate |
| `seen` | `{ "gateId.stageIdx": true }` | run | Stages attempted |
| `clean` | `{ "gateId.stageIdx": true }` | run | Stages answered correctly on the first attempt |
| `deaths` | array | run (kept across hardcore wipes) | `{ch, chName, strand, st, q, given, correct, opts, why, t, mode, run}` |
| `done` | bool | run | All gates cleared |
| `mode` | `null` \| `"standard"` \| `"hardcore"` | run | `null` shows the mode picker |
| `streak` | int | run | Current run of consecutive correct answers |
| `justDied` | bool | run | Used for the COMEBACK TRIP achievement |
| `run` | int | save | Run counter; goes up on New run and on a hardcore wipe |
| `ach` | `{ id: timestamp }` | save (lifetime) | Unlocked achievements |
| `flawless` | int | save | Lifetime count of gates cleared with no deaths |
| `bestStreak` | int | save | Best streak ever |
| `hcBest` | int | save | Most gates cleared in a single hardcore run |

### 4.2 Lifecycle

| Action | Resets | Keeps |
|---|---|---|
| Page load | — | Loads `S`. An old save with no `mode` but with progress is migrated to `"standard"`. `ch` and `st` are clamped to the current content size. |
| Hardcore death | `ch`, `st`, `seen`, `clean`, `done` | `deaths`, `mode`, all lifetime fields; `run++` |
| **New run** (button or `new`) | Everything run-scoped, including `deaths` and `mode` (so the picker shows) | `run+1`, `ach`, `flawless`, `bestStreak`, `hcBest` |
| **Wipe everything** (button or `wipe`, press twice within 5 s) | Everything, including achievements | — |

### 4.3 Save compatibility rule

Progress is stored **by position** (gate index, stage index, `"gateId.stageIdx"` keys).

- **Safe to change without breaking saves:** question wording, option text, `g`/`w` text, intros and names.
- **Breaks saves:** adding, removing or reordering gates or stages. If you do this, **change `LS`** (e.g. to `tourism10.passport.v2`) so every learner starts fresh instead of loading a mismatched run. Tell the owner, because learners will lose their progress and achievements.

---

## 5. Game loop

```
boot()
 └─ renderStage()
     ├─ if !S.mode → renderModePick() → chooseMode(m) → renderStage()
     ├─ if S.ch >= NCH → endGame()
     └─ print gate header (intro on stage 1) + narrative + typed question
        render 4 shuffled buttons (data-idx = original option index)

answer(i)
 ├─ correct:
 │   mark clean if first attempt, streak++, print g
 │   st++ → checkAfterCorrect()
 │   if gate finished: ch++, st=0 → checkAfterGate(gate, idx)
 │   if all gates finished: done=true → endGame() after 700 ms
 │   else renderStage() after 420 ms (0 ms with reduced motion)
 └─ wrong:
     remove clean, streak=0, justDied=true, push death, unlock("stranded")
     standard → "*** STRANDED ***", [r] retry the same stage
     hardcore → "*** PASSPORT REVOKED ***", record hcBest, wipe the run, run++,
                maybe unlock("flyer"), [r] start again from Gate 01
```

**Status labels** in the HUD, based on the fraction of stages completed:

| Fraction | Label |
|---|---|
| under 5% | EXCURSIONIST |
| 5% or more | DOMESTIC |
| 25% or more | REGIONAL |
| 50% or more | INTERNATIONAL |
| 80% or more | GLOBETROTTER |
| finished | TOUR GUIDE |

---

## 6. Features

### 6.1 Modes

- **Standard:** a death sends the learner back to the stage they failed.
- **Hardcore:** a death wipes the run.
- **Switching:** the mode is picked at the start of every run and can only be changed through New run. This stops anyone playing most of the game in Standard and switching to Hardcore to earn the hardcore achievements.
- **Visual cues:** `body.hc` turns the status dot red, and the bar's mode label turns red.

### 6.2 Achievements (`ACH`, 26 total)

| id | Name | Trigger (where it's checked) |
|---|---|---|
| `board` | BOARDING PASS | First correct answer (`checkAfterCorrect`) |
| `stamp` | FIRST STAMP | First gate cleared (`checkAfterGate`) |
| `stranded` | FIRST STRANDING | First death (`answer`) |
| `comeback` | COMEBACK TRIP | Correct answer while `justDied` is set |
| `streak10` / `streak25` / `streak53` | ON A ROLL / NON-STOP FLIGHT / LONG-HAUL | `S.streak` reaches 10 / 25 / 53 |
| `flawless` | FLAWLESS GATE | Gate cleared with all 5 stages in `clean` |
| `big5` | THE BIG FIVE | Lifetime `S.flawless` reaches 5 |
| `half` | HALFWAY THERE | `stagesDone()` reaches `NST/2` |
| `scholar` | SCHOLAR | 50 or more seen and clean/seen of at least 0.9 (current run) |
| `t_sec` … `t_com` | SECTOR SPECIALIST, CARTOGRAPHER, HOME-GROWN, SIGHTSEER, GREEN GUIDE, MARKET LEADER, HERITAGE KEEPER, FIVE-STAR SERVICE | Last gate of that topic cleared (`STRAND_LAST[strand] === idx`) |
| `guide` | QUALIFIED TOUR GUIDE | All gates cleared, any mode |
| `iron10` / `iron25` | IRON PASSPORT / DIPLOMATIC PASSPORT | Hardcore, `S.ch` reaches 10 / 25 |
| `hcgrad` | HARDCORE GRADUATE | All gates cleared in hardcore |
| `flyer` | FREQUENT FLYER | `S.run` reaches 5 (checked in `newRun` and after a hardcore wipe) |
| `brochure` | READ THE BROCHURE | `cmdHelp()` |
| `mapread` | MAP READER | `cmdMap()` |

- `unlock(id)` is idempotent. It prints a `.ach` toast in the terminal, saves, and refreshes the HUD.
- **To add an achievement:** add an entry to `ACH`, then call `unlock("id")` from the right hook. The HUD, `awards` command and report all read `ACH`, so no other changes are needed.

### 6.3 Journey progress bar

- **Markup:** `.journey`, containing `#jNow` (current gate and topic), `#jPct` (`"NN% · done/265"`), `#track` (with `role="progressbar"` and `aria-valuenow`), `#prog` (the fill) and `.jlegend` (hidden under 520 px).
- **Topic ticks:** tick marks (`<b>` inside `#track`) are drawn once by the IIFE `drawTicks()` at each topic boundary, positioned by stage count. Each tick's `title` is the topic name.
- **Updates:** `hud()` recalculates the bar after every state change.

### 6.4 CLI commands (`runCmd`)

| Input | Action |
|---|---|
| `1`–`9` | Click the nth enabled button that has a `data-idx` (answers or mode picker; the retry button has no `data-idx`) |
| `r`, `retry` | `renderStage()` |
| `look`, `l` | `renderStage()` |
| `help`, `?` | Command list (unlocks `brochure`) |
| `map` | Gate list grouped by topic, with CLEARED / HERE / sealed and deaths per gate (unlocks `mapread`) |
| `stats` | Mode, journey %, accuracy, deaths, streaks, best hardcore run, achievement count |
| `awards`, `achievements` | Achievement checklist |
| `mode` | Current mode and how to switch |
| `report` | `endGame()` |
| `new`, `new run` | `newRun()` |
| `wipe`, `reset` | `askWipe()` (two-step confirm; no `confirm()` dialogs) |

Buttons below the terminal: Back to question, Help, Map, Stats, Achievements, End run & report, New run, Wipe everything. Back to question just calls `renderStage()` (same as typing `look`/`r`) — Map, Stats, Achievements, Help and Mode now `clear()` the terminal before printing, so it's the only way back to the current question for a player who never types.

**`warp` — hidden teacher tool, not listed in `help` or above.** Typing `warp 37` or `warp 37.3` after picking a mode jumps straight to that gate (or gate.stage) via `cmdWarp()`. The first use of `warp` in a run sets `S.warped`, which `unlock()`, `checkAfterGate()` and `answer()` check to suppress achievements and lifetime records (`bestStreak`, `hcBest`) for the rest of that run — so a teacher jumping around for review can't accidentally earn or corrupt them. New run clears the flag.

### 6.5 Debrief (`endGame`)

The report is rendered into `#reportArea`, in this order:

1. **Header:** QUALIFIED TOUR GUIDE, HARDCORE TOUR GUIDE, or RUN ENDED EARLY, with a subline giving the mode and journey %.
2. **THE RUN:** journey meter, stages reached, first-time correct %, deaths, gates cleared, best streak, best hardcore run.
3. **ACHIEVEMENTS:** a card grid; unlocked cards are highlighted.
4. **STRENGTHS AND WEAKNESSES BY TOPIC:** ranked by first-time-correct rate, with strongest/weakest badges.
5. **WHAT TO REVISE, IN ORDER:** weakest topic, the top 3 deadliest gates, and the strongest topic.
6. **EVERY DEATH:** question, the learner's answer, the correct answer, and the explanation, tagged with run number.

---

## 7. Styling

- **Theme:** a single deliberate dark CRT theme with no light mode (matches the sample game). `body` paints its own background.
- **Tokens (`:root`):** `--void #0B0805`, `--panel #120D07`, `--panel-2 #1A1309`, `--edge #3A2A12`, `--amber #E9A73C`, `--amber-hi #FFD79A`, `--amber-dim #9A7130`, `--amber-ghost #6B4F22`, `--red #E8514A`, `--red-dim #7C2C29`, `--green #6FC98A`.
- **Fonts:** `--crt` VT323 (headings and numbers), `--mono` IBM Plex Mono (everything else).
- **Effects:** scanline overlay via `.shell::after`, blinking caret, typed-question animation.
- **Accessibility:** `prefers-reduced-motion` turns off the caret blink, bar transition and typing animation, and removes the delays between stages. Keyboard focus is visible, and `#screen` has `aria-live="polite"`.
- **Phone layout** (`max-width: 520px`): tighter padding, report stats stack, the progress-bar legend is hidden.
- **Semantic colours:** green = correct/gain, red = death/hardcore/destructive, amber = everything else.

---

## 8. Security and robustness notes

- **HTML injection:** content strings are trusted (authored in the file) and rendered with `innerHTML`. The one user input, the command echo, is escaped for `<`. Keep it that way: never render raw user input.
- **Death log growth:** `S.deaths` grows with no limit within a run and is only cleared by New run or Wipe. With 265 short entries it's far below localStorage limits, but capping it would be a sensible guard.
- **Screen trimming:** `#screen` is trimmed to 110 lines in `renderStage` so the DOM doesn't grow forever.
- **Hardcore and COMEBACK TRIP:** `justDied` carries across a hardcore wipe, so the first correct answer of the next run unlocks COMEBACK TRIP. This is intentional and harmless.
- **External dependency:** Google Fonts is the only one. If it's blocked (e.g. a lab firewall), the page falls back to `monospace` and still works.

---

## 9. Deployment

- **Netlify settings:** base directory, build command, publish directory and functions directory are all empty. No environment variables. Production branch `main`.
- **Updating:** push to `main` and Netlify redeploys in well under a minute. Learners get the new version on reload, and their progress is kept (subject to §4.3).
- **Free plan costs (credit-based, accounts created from Sept 2025):**
  - 300 credits/month.
  - Each production deploy costs 15 credits, so batch commits and push once.
  - Bandwidth is 20 credits/GB and requests 2 credits per 10k. One page load (a single ~180 KB file, usually compressed) costs a fraction of a credit.
  - The realistic limit is the number of deploys, not learner traffic.
  - If credits run out, the site pauses until the next billing cycle.
- **Local testing:** open `index.html` directly in a browser. This costs nothing, and localStorage works on `file://` in Chromium and Firefox.
- **Line endings:** Git on Windows shows an LF→CRLF warning. It's harmless. Optionally add a `.gitattributes` with `* text=auto`.

---

## 10. Testing recipes

### 10.1 Content and difficulty lint (Node) — `scripts/check.js`

The actual tool in use: run `node scripts/check.js --strict` (optionally `--gates 7,37,53` to
scope it) from the repo root. It does two things in one pass:

- **Structure check** (what a standalone `check-content.js` used to do): sequential ids, 5
  steps per gate, 4 unique options per step, required fields present, no `<` in content.
- **Difficulty lint** (`difficulty-plan.md` §7): length-ratio balance between the correct
  option and the distractors, the correct-option-longest share per topic (cap 35%), feedback
  leaks into the next stage, absolute words in distractors, stem echoes, and NOT/INCORRECT
  question density per gate.

**Final numbers (2026-09-16, all 265 questions rewritten):** `FAIL 0`, `WARN 3` (49.2, 49.5,
50.2 — "not always" in a distractor, genuine guide phrasing, reviewed). See
`difficulty-plan.md` for the full rules and technique bank behind these numbers, and
`review/questions-review.md` for the per-question fairness record with guide page citations.

### 10.2 Automated playthrough (Playwright)

The correct option always has `data-idx="0"` and a wrong one has `data-idx="1"`, which makes scripted runs simple:

```js
// scripts/sim.js  —  run: npx playwright install chromium && node scripts/sim.js
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ reducedMotion: 'reduce' })).newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + process.cwd() + '/index.html');
  const click = sel => p.evaluate(s => document.querySelector(s).click(), sel);
  const pick = idx => p.evaluate(i =>
    [...document.querySelectorAll('.ch:not(:disabled)')].find(x => x.dataset.idx === i).click(), idx);
  const state = () => p.evaluate(() => ({ ch: S.ch, st: S.st, run: S.run, mode: S.mode,
    ach: Object.keys(S.ach).length, pct: document.getElementById('jPct').textContent }));

  await p.evaluate(() => document.querySelectorAll('.ch')[1].click()); // hardcore
  for (let i = 0; i < 60; i++) { await pick('0'); await p.waitForTimeout(10); }
  console.log('hardcore, 60 right:', await state());          // expect ch 12, iron10 unlocked
  await pick('1'); await p.waitForTimeout(20);
  console.log('hardcore, after death:', await state());       // expect ch 0, run 2

  await click('#newBtn');
  await p.evaluate(() => document.querySelectorAll('.ch')[0].click()); // standard
  while (!(await p.evaluate(() => S.done))) { await pick('0'); await p.waitForTimeout(10); }
  console.log('standard, finished:', await state());          // expect pct "100% · 265/265"
  console.log('page errors:', errs);
  await b.close();
})();
```

The last verified run of this simulation reached all expected states with zero page errors.

**2026-09-16 re-verification (post content rewrite):** rather than install Playwright fresh,
the same checkpoints were re-run through an already-open tab (the `<script>` is a single
unwrapped top-level block, so `S`, `CHAMBERS`, `answer`, `renderStage` etc. are `window`
properties, reachable the same way `p.evaluate()` reaches them). Direct `S.ch`/`S.st` warps
were used to reach specific gates instantly rather than clicking through all 265 in real time.
Confirmed: hardcore reaching `S.ch` 10 unlocks `iron10` with zero errors; a hardcore death
resets to `ch 0, run 2` with `hcBest` kept; a full run reaches `pct "100% · 265/265"` and
`endGame()` renders a non-empty debrief; a hand-built pre-rewrite-shaped save (old `n`/`q`/`o`
text, same `LS` key) loads correctly with position, achievements and deaths intact — confirming
§4.3's save-compatibility rule held through the rewrite. Zero `window.onerror` events throughout.

---

## 11. Guidance for future changes (Claude Code)

### Invariants to keep

- A single self-contained `index.html` with no build step (Netlify is configured for this).
- `CHAMBERS[i].id === i + 1`, correct option at `o[0]`, 4 options per step, and all content taken from the Via Afrika Grade 10 study guide.
- Every `localStorage` access wrapped in `try/catch`.
- No `alert`/`confirm`/`prompt` dialogs; use in-terminal two-step confirms instead.
- The visual identity (amber CRT tokens, VT323 and Plex Mono) and the teacher's sample-game structure.
- Counts derived from `NCH`, `NST` and `ACH.length`. Some copy still hardcodes "53" (the footer, and the `guide`, `hcgrad` and `streak53` descriptions), so update those strings if the gate count changes.

### Common tasks

| Task | How |
|---|---|
| Fix a question's wording | Edit `q`, `o`, `g` or `w` in place. Saves are unaffected. |
| Add a gate | Append to the right topic block. Renumber every following `id`. Topics must stay contiguous (`STRAND_LAST` and the progress ticks rely on it). **Bump `LS`.** |
| Add a topic | Add to `STRAND` (key, name, short), add gates, then add a `t_<key>` achievement to `ACH`. **Bump `LS`.** |
| Add an achievement | Add it to `ACH` and call `unlock()` from `checkAfterCorrect`, `checkAfterGate`, `answer` or a command. |
| "Start from Term X" option (suggested earlier, not built) | Add a picker after mode selection that sets `S.ch` to the first gate index of the chosen term. Consider stopping topic-complete, `guide` and `hcgrad` achievements unlocking when the learner didn't start at Gate 01. |
| Balance answer lengths | Content pass so distractors match the correct option's length and detail. |
| Cap death log | In `answer`, `if (S.deaths.length > 300) S.deaths.shift();` |

### Commit hygiene

- Batch related changes into one push. Each push to `main` costs 15 Netlify credits.
- Run `scripts/check-content.js` before pushing any content change.
