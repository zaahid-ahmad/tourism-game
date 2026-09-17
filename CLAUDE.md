# analysis.md — PASSPORT: Grade 10 Tourism CLI Game

Technical and content analysis of the current production version of the site, written as a handover for Claude Code.

- **Repo:** `https://github.com/zaahid-ahmad/tourism-game` (branch `main`)
- **Hosting:** Netlify, auto-deploys on every push to `main`
- **Codebase:** the game itself is one file, `index.html` (about 2,600 lines, about 185 KB), with no build step and no dependencies. Since 2026-09-17 the repo also has a small **optional, best-effort leaderboard**: one Netlify Function (`netlify/functions/board.mjs`) backed by Netlify Blobs, plus `netlify.toml` and a `package.json` (single dependency, `@netlify/blobs`, needed only so Netlify's bundler can resolve the function's import). `index.html` still opens directly from disk with no server and no build step; only the shared leaderboard needs the deployed function. See §12.
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
  - **Mr Worldwide mode:** hardcore rules, plus a 15-second-per-question clock and gates in random order. See §6.1.
- **Other features:** 27 achievements, a "journey" progress bar, typed CLI commands, and an end-of-run debrief that breaks performance down by topic.

The design copies an earlier teacher-made game (`ETS23B3-Venture-RPG.html`): same amber CRT palette, same HUD, same chamber/stage/death loop and same debrief structure.

---

## 2. File layout (`index.html`)

Line numbers are approximate. Use them as a map and search for the section comments to confirm.

| Lines | Section | Notes |
|---|---|---|
| 1–10 | `<!doctype>`, `<head>`, `<title>Passport Tourism Sim</title>`, Google Fonts link | Fonts: **VT323** (CRT display) and **IBM Plex Mono** (body) |
| 11–201 | `<style>` | All CSS inline. Design tokens are on `:root`. |
| 203–262 | Markup | `.shell` (bar, `.hud`, `.journey`, `#screen`, `#choices`, `.inputrow`), `.btnrow` (incl. `#boardBtn`), `#reportArea`, `footer` |
| 264–276 | `var STRAND` | 8 topic definitions |
| 278–1934 | `var CHAMBERS = [...]` | **All game content** (53 gates). Sub-comments mark each topic: `/* ===== TERM 1 · TOURISM SECTORS ===== */` and so on. |
| 1936–1937 | `NCH`, `NST` | Gate count and total stage count, derived from `CHAMBERS` |
| 1939–1973 | `var ACH`, `STRAND_LAST` | Achievement definitions; last gate index per topic |
| 1975–2010 | State: `LS`, `freshRun()`, `S`, load/migrate, `save()` | localStorage persistence. `freshRun()` includes leaderboard fields `name`, `subTs`, `subAcc` (§6.6). |
| 2012–2095 | Helpers: `out`, `clear`, `pad`, `esc`, `typeInto`, `shuffle`, `stagesDone`, tick drawing, `hud()` | `esc()` escapes leaderboard rows read back over the network — the one place remote content is rendered. |
| 2097–2140 | Achievement engine: `unlock`, `checkAfterCorrect`, `checkAfterGate` | |
| 2142–2295 | Render and game loop: `boot`, `renderModePick`, `chooseMode`, `renderStage`, `answer` | |
| 2297–2376 | Commands: `cmdHelp`, `cmdMap`, `cmdStats`, `cmdAwards`, `cmdMode`, `cmdWarp` | |
| 2377–2460 | Leaderboard client: `api`, `setName`, `cmdName`, `lbSay`, `trySubmit`, `cmdBoard` | Optional, best-effort, never blocks the game (§6.6) |
| 2462–2518 | `runCmd`, event bindings, `newRun`, `askWipe` | |
| 2550–2642 | `endGame()` | Debrief/report HTML; calls `trySubmit()` at the end |
| 2647 | `boot();` | Entry point |

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
| `ch` | int | run | Index of the current *presentation position* (0-based) — the gate itself is `gateAt(ch)`, which is `CHAMBERS[ch]` unless `gOrder` remaps it. `NCH` means finished. |
| `st` | int | run | Index of the current stage *presentation position* within the gate — the real step is `realStep(gate, st)`, which is `st` unless `sOrder` remaps it. |
| `seen` | `{ "gateId.realStageIdx": true }` | run | Stages attempted, keyed by the real (unshuffled) stage index |
| `clean` | `{ "gateId.realStageIdx": true }` | run | Stages answered correctly on the first attempt |
| `deaths` | array | run (kept across hardcore/Mr Worldwide wipes) | `{ch, chName, strand, st, pos, q, given, correct, opts, why, t, mode, run}` — `st` is the real step index, `pos` is the presentation position shown to the player (`given` is `-1` for a Mr Worldwide timeout) |
| `done` | bool | run | All gates cleared |
| `mode` | `null` \| `"standard"` \| `"hardcore"` \| `"worldwide"` | run | `null` shows the mode picker |
| `streak` | int | run | Current run of consecutive correct answers |
| `justDied` | bool | run | Used for the COMEBACK TRIP achievement |
| `gOrder` | array \| `null` | run | Mr Worldwide only: a permutation of `[0..NCH-1]` mapping presentation position → real `CHAMBERS` index. `null` in standard/hardcore (gate order is fixed). |
| `sOrder` | `{ gateId: [perm of 0..4] }` \| `null` | run | Hardcore and Mr Worldwide: per-gate stage permutations, regenerated by `reshuffleRun()` every time a wipe-mode run (re)starts. `null` in standard. |
| `qEnd` | int (ms epoch) | run | Mr Worldwide only: deadline for the live question. Reset to `0` whenever a genuinely new question is presented, so `renderStage()` assigns a fresh 15s; a non-zero, non-stale value survives a reload so the remaining time (not a fresh clock) resumes. |
| `run` | int | save | Run counter; goes up on New run and on a hardcore/Mr Worldwide wipe |
| `ach` | `{ id: timestamp }` | save (lifetime) | Unlocked achievements |
| `flawless` | int | save | Lifetime count of gates cleared with no deaths |
| `bestStreak` | int | save | Best streak ever |
| `hcBest` | int | save | Most gates cleared in a single hardcore run |
| `mwBest` | int | save | Most correct answers reached in a single Mr Worldwide run (captured at death or at a full clear) |
| `name` | string | save (lifetime) | Display name for the leaderboard, empty until set. See §6.6. |
| `subTs` | int (ms epoch) | save | Timestamp of the last leaderboard submission (throttles resubmits) |

`S.warped` (hidden teacher `warp` tool only) additionally forces `gOrder`/`sOrder` back to `null` — a warp always targets the real gate/stage typed, never a shuffled position.

### 4.2 Lifecycle

| Action | Resets | Keeps |
|---|---|---|
| Page load | — | Loads `S`. An old save with no `mode` but with progress is migrated to `"standard"`. `ch` and `st` are clamped to the current content size. |
| Hardcore/Mr Worldwide death | `ch`, `st`, `seen`, `clean`, `done`, `qEnd`; `gOrder`/`sOrder` regenerated by `reshuffleRun()` | `deaths`, `mode`, all lifetime fields (`mwBest` captured from the pre-reset streak first); `run++` |
| **New run** (button or `new`) | Everything run-scoped, including `deaths`, `mode` and `gOrder`/`sOrder`/`qEnd` (so the picker shows) | `run+1`, `ach`, `flawless`, `bestStreak`, `hcBest`, `mwBest`, `name`, `subTs` |
| **Wipe everything** (button or `wipe`, press twice within 5 s) | Everything, including achievements and the leaderboard name | — |

### 4.3 Save compatibility rule

Progress is stored **by position** (gate index, stage index, `"gateId.stageIdx"` keys).

- **Safe to change without breaking saves:** question wording, option text, `g`/`w` text, intros and names.
- **Breaks saves:** adding, removing or reordering gates or stages. If you do this, **change `LS`** (e.g. to `tourism10.passport.v2`) so every learner starts fresh instead of loading a mismatched run. Tell the owner, because learners will lose their progress and achievements.

---

## 5. Game loop

```
boot()
 └─ renderStage()
     ├─ cancelPending() — clears any stray pending renderStage()/endGame() timeout and the Mr Worldwide clock
     ├─ if !S.mode → renderModePick() → chooseMode(m) → reshuffleRun() if isWipeMode() → renderStage()
     ├─ if S.ch >= NCH → endGame()
     ├─ mwLocked = (S.mode === "worldwide") — set before anything renders, so the lock is active
     │   before the typing animation's race window can open
     ├─ gate = gateAt(S.ch), step = gate.steps[realStep(gate, S.st)] — S.ch/S.st stay "presentation
     │   position"; gateAt/realStep translate through S.gOrder/S.sOrder when a wipe-mode run set them
     ├─ print gate header (intro on stage 1) + narrative + typed question
     │   render 4 shuffled buttons (data-idx = original option index)
     └─ if worldwide and !done: arm a fresh 15s S.qEnd unless it's still live from a reload,
        save(), startMwClock() (updates #mwClockNum every 250ms — plus an immediate sync call so a
        fresh question never flashes the previous tick's stale time — turns #mwClock red/pulsing
        at ≤5s via the "urgent" class, calls mwTimeout() at 0)

answer(i)
 ├─ cancelPending(), mwLocked = false — briefly unlocked while the next question/death recap is up
 ├─ correct:
 │   mark clean if first attempt, streak++, print g
 │   st++, S.qEnd = 0 (forces a fresh clock on the next question) → checkAfterCorrect()
 │   if gate finished: ch++, st=0 → checkAfterGate(gate, idx)
 │   if all gates finished: done=true (captures mwBest from streak if worldwide) → endGame() after 700 ms
 │   else renderStage() after 420 ms (0 ms with reduced motion) — both delays go through the
 │        cancellable `tNext` handle, not a bare setTimeout
 └─ wrong (i === -1 means a Mr Worldwide timeout, via mwTimeout() → answer(-1)):
     remove clean, streak=0, justDied=true, push death ({st: real step, pos: presentation
     position}), unlock("stranded")
     standard → "*** STRANDED ***", [r] retry the same stage
     isWipeMode() (hardcore or worldwide) → "*** PASSPORT REVOKED ***" (worldwide adds
         "— WRONG ANSWER" or "— TIME'S UP"), capture hcBest/mwBest, wipe the run,
         reshuffleRun(), run++, maybe unlock("flyer"), [r] start again from Gate 01
```

Mr Worldwide is "hardcore plus": `isWipeMode()` (`S.mode === "hardcore" || S.mode === "worldwide"`)
gates every wipe-on-death site (the reset branch above, the red HUD/body styling, and the debrief's
"this run was wiped" note) so hardcore's existing behaviour is untouched except at those three spots.
`gOrder`/`sOrder` are generated once per run-start by `reshuffleRun()` — never lazily inside a gate,
which would risk silently re-asking an already-answered stage — called from `chooseMode()` and again
on every hardcore/Mr Worldwide death. The hidden `warp` teacher tool bypasses both entirely (sets
`gOrder`/`sOrder` to `null`) so `warp 37.3` always lands on the literal gate 37, stage 3.

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
- **Hardcore:** a death wipes the run. The 5 stages inside each gate are reshuffled every time the run (re)starts, so a memorised answer sequence from a previous attempt no longer works; gate order itself stays fixed.
- **Mr Worldwide:** hardcore rules, plus a 15-second clock per question (persisted as `S.qEnd`, a wall-clock deadline, so it survives a reload with the remaining time intact — not a fresh 15s — and a genuinely stale value, e.g. a save from days ago, gets a fresh deadline instead of an instant death) and gates in random order (`S.gOrder`). A timeout is treated as a death with no answer given (`answer(-1)`). Map, Stats, Help, Awards, Mode and the Leaderboard are locked for the whole run (`mwLocked`), briefly unlocked between questions and during the death recap, fully unlocked by `report`/`new`/`wipe`. Only the "MR WORLDWIDE" achievement can be earned in this mode — every other achievement is suppressed the same way `S.warped` suppresses all of them.
- **Switching:** the mode is picked at the start of every run and can only be changed through New run. This stops anyone playing most of the game in Standard and switching to Hardcore/Mr Worldwide to earn their achievements.
- **Visual cues:** `body.hc` turns the status dot red and the bar's mode label turns red in both wipe modes (`isWipeMode()`); a floating clock badge (`#mwClock`, `position:fixed` top-right, so it stays in view regardless of scroll position — the page auto-scrolls to the choices, which would otherwise carry a HUD-row clock off-screen) only shows in Mr Worldwide, and turns red with a pulse (`.urgent`) at 5 seconds or less remaining.

### 6.2 Achievements (`ACH`, 27 total)

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
| `worldwide` | MR WORLDWIDE | All gates cleared in Mr Worldwide (`checkAfterGate`). The only achievement not suppressed by `unlock()`'s Mr Worldwide guard. |

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
| `stats` | Mode, journey %, accuracy, deaths, streaks, best hardcore run, best Mr Worldwide streak, achievement count |
| `awards`, `achievements` | Achievement checklist |
| `mode` | Current mode and how to switch |
| `board`, `leaderboard` | `cmdBoard()` — fetches and prints all three ranked boards (§6.6) |
| `name <text>` | `cmdName()` — sets the leaderboard display name (§6.6) |
| `report` | `endGame()` |
| `new`, `new run` | `newRun()` |
| `wipe`, `reset` | `askWipe()` (two-step confirm; no `confirm()` dialogs) |

Buttons below the terminal: Back to question, Help, Map, Stats, Achievements, Leaderboard, End run & report, New run, Wipe everything. Back to question just calls `renderStage()` (same as typing `look`/`r`) — Map, Stats, Achievements, Leaderboard, Help and Mode now `clear()` the terminal before printing, so it's the only way back to the current question for a player who never types.

**In Mr Worldwide, `help`/`map`/`stats`/`awards`/`mode`/`board` (and their buttons) are locked** while a question is live (`mwLocked`, guarded by the shared `mwGuard()` helper) — each prints "locked while Mr Worldwide is live. Type report, new or wipe to stop." and returns without clearing the screen, so the live question and its countdown stay visible underneath. They unlock briefly between questions and during the death recap, and fully once `report`/`new`/`wipe` ends the run. `1`-`9`, `r`/`retry`, `look`/`l`, `report`, `new` and `wipe`/`reset` are never locked.

**`warp` — hidden teacher tool, not listed in `help` or above.** Typing `warp 37` or `warp 37.3` after picking a mode jumps straight to that gate (or gate.stage) via `cmdWarp()`, bypassing any hardcore/Mr Worldwide shuffle (`S.gOrder`/`S.sOrder` are set to `null` first, so the numbers typed always mean the literal gate/stage, never a shuffled position). The first use of `warp` in a run sets `S.warped`, which `unlock()`, `checkAfterGate()` and `answer()` check to suppress achievements and lifetime records (`bestStreak`, `hcBest`, `mwBest`) for the rest of that run — so a teacher jumping around for review can't accidentally earn or corrupt them. New run clears the flag.

### 6.5 Debrief (`endGame`)

The report is rendered into `#reportArea`, in this order:

1. **Header:** QUALIFIED TOUR GUIDE, HARDCORE TOUR GUIDE, MR WORLDWIDE TOUR GUIDE, or RUN ENDED EARLY, with a subline giving the mode and journey %.
2. **THE RUN:** journey meter, stages reached, first-time correct %, deaths, gates cleared, best streak, best hardcore run, best Mr Worldwide streak.
3. **ACHIEVEMENTS:** a card grid; unlocked cards are highlighted.
4. **STRENGTHS AND WEAKNESSES BY TOPIC:** ranked by first-time-correct rate, with strongest/weakest badges.
5. **WHAT TO REVISE, IN ORDER:** weakest topic, the top 3 deadliest gates, and the strongest topic.
6. **EVERY DEATH:** question, the learner's answer, the correct answer, and the explanation, tagged with run number.

At the end of `endGame()`, after the report HTML is written, it calls `trySubmit(attempted, clean, acc)` (§6.6).

### 6.6 Leaderboard (optional, added 2026-09-17; extended with hardcore/Mr Worldwide boards)

A shared, best-effort leaderboard. It never blocks or breaks the game: every network call has a
timeout and a catch, and the game is byte-identical to before this feature if the function is
unreachable, blocked, or the page is opened from `file://`.

- **Backend:** `netlify/functions/board.mjs`, a Netlify Function (v2, ESM) backed by Netlify
  Blobs — one blob per player, keyed by a slug of their name, so concurrent writes from a class
  answering at the same time never race each other the way one shared aggregate blob would.
  `GET` lists and ranks all blobs into three arrays; `POST` validates one player's submitted run
  and updates their stored entry.
- **Identity:** a free-text display name, letters/numbers/spaces (and `. ' -`) only, 2–16
  characters, asked once via the terminal (never `prompt()`) and stored in `S.name` (lifetime).
  The player can `skip`, change it anytime with `name <text>`, or lose it via Wipe everything.
- **Three boards, one entry per player.** Every submission carries all three metrics
  (`attempted`/`clean` for accuracy, `hcGates` from `S.hcBest`, `mwCorrect` from `S.mwBest`), and
  the server improves each **independently** — a submission that raises `mwCorrect` but not `acc`
  still updates the Mr Worldwide board without touching the stored accuracy row, and vice versa.
  This replaced an earlier all-or-nothing design where a single field decided whether to overwrite
  the whole stored row (see the submission note below for why that mattered).
  - **Accuracy:** ranked by first-time-correct rate (`clean/attempted`), tie-broken by more stages
    attempted, then fewer deaths, then earliest submission. A **floor of 50 attempted stages**
    (mirroring the `scholar` achievement threshold) is required to be ranked; runs below it are
    stored but shown as "not yet ranked". No floor applies to the other two boards.
  - **Hardcore — furthest:** ranked by `hcGates` (most gates cleared in a single hardcore run),
    tie-broken by earliest improvement.
  - **Mr Worldwide — correct:** ranked by `mwCorrect` (most correct answers in a single Mr
    Worldwide run, captured at death or at a full clear), tie-broken by earliest improvement.
- **Submission:** automatic at the end of `endGame()`, but only after the name prompt has given
  consent (states plainly that the name is shared). Skipped when `S.warped` (a warped run already
  earns no achievements or lifetime records — see the `warp` note above — and must not reach the
  board either), no name is set, `attempted < 1`, or a submission happened in the last 60 s. There
  is deliberately **no client-side "must be better" gate** on any of the three metrics — the client
  used to skip resubmitting unless the run's accuracy beat a stored `S.subAcc`, but that could
  permanently block a later, far more meaningful run if an early tiny run (e.g. 1/1 = 100%) set the
  bar too high; the server already decides independently per metric, so the client just always
  tries (subject to the 60s throttle) and lets it decide.
- **Cheating:** honour system by design. The function rejects only *structurally impossible*
  submissions (`clean > attempted`, `attempted < gates * 5`, `hcGates > 53`, `mwCorrect > 265`,
  out-of-range counts, an unrecognised `mode` — the allow-list is `standard`/`hardcore`/
  `worldwide`) — deliberately **not** answer validation, which would need the whole game loop
  moved server-side. A learner with DevTools can still fabricate a result; this adds friction, not
  proof. **Deploy order matters:** the server's mode allow-list must include `"worldwide"` before
  (or in the same push as) shipping a client that sends `mode: "worldwide"`, or every Mr Worldwide
  submission 400s with no client-visible error beyond "leaderboard unavailable".
- **Escaping — the one real security-relevant piece:** names now arrive from other users over the
  network, and this codebase renders everything with `innerHTML` (§8). The server sanitises on
  write (`cleanName()` in `board.mjs`, strips everything outside the allowed charset) **and** the
  client escapes on read (`esc()`, `index.html` ~2027) before any remote value is put in the DOM.
  Both layers are mandatory, not defensive — do not remove either one.
- **Commands:** `board`/`leaderboard` (locked while `mwLocked`, like the other info commands —
  see §6.1/§6.4) and `name <text>` (§6.4); a `Leaderboard` button beside Achievements.

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

- **HTML injection:** content strings are trusted (authored in the file) and rendered with `innerHTML`. The command echo is escaped for `<`. Leaderboard rows are the one place genuinely untrusted, remote content is rendered — they go through `esc()` (§6.6) on the way in. Keep it that way: never render raw user input, local or remote.
- **Death log growth:** `S.deaths` grows with no limit within a run and is only cleared by New run or Wipe. With 265 short entries it's far below localStorage limits, but capping it would be a sensible guard.
- **Screen trimming:** `#screen` is trimmed to 110 lines in `renderStage` so the DOM doesn't grow forever.
- **Hardcore and COMEBACK TRIP:** `justDied` carries across a hardcore wipe, so the first correct answer of the next run unlocks COMEBACK TRIP. This is intentional and harmless.
- **External dependency:** Google Fonts is the only one. If it's blocked (e.g. a lab firewall), the page falls back to `monospace` and still works.

---

## 9. Deployment

- **Netlify settings:** publish directory `.` and functions directory `netlify/functions`, both now set explicitly in `netlify.toml` (previously empty/default). No environment variables. Production branch `main`.
- **`package.json`:** exists only so Netlify's bundler can resolve `netlify/functions/board.mjs`'s `@netlify/blobs` import — it triggers an automatic `npm install` on deploy. This is *not* a build step for `index.html`, which still has none and still opens directly from disk with no server. `node_modules/` is gitignored; `package-lock.json` is committed.
- **Updating:** push to `main` and Netlify redeploys in well under a minute. Learners get the new version on reload, and their progress is kept (subject to §4.3).
- **Free plan costs (credit-based, accounts created from Sept 2025):**
  - 300 credits/month.
  - Each production deploy costs 15 credits, so batch commits and push once.
  - Bandwidth is 20 credits/GB and requests 2 credits per 10k. One page load (a single ~180 KB file, usually compressed) costs a fraction of a credit. Leaderboard function invocations are the same order of cost — negligible for a class-sized audience; deploys remain the binding constraint.
  - The realistic limit is the number of deploys, not learner traffic.
  - If credits run out, the site pauses until the next billing cycle, and the leaderboard function simply stops responding — `index.html` still works fully offline (§6.6).
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

- `index.html` itself is still self-contained and needs no build step and no server to play — it opens straight from disk exactly as before. The repo as a whole is no longer build-step-free: `package.json` + `netlify.toml` exist solely to deploy the optional leaderboard function (§6.6, §9). Don't reintroduce a *real* build step (bundler, transpiler, minifier) for `index.html` — that invariant still holds.
- `CHAMBERS[i].id === i + 1`, correct option at `o[0]`, 4 options per step, and all content taken from the Via Afrika Grade 10 study guide.
- Every `localStorage` access wrapped in `try/catch`.
- No `alert`/`confirm`/`prompt` dialogs; use in-terminal two-step confirms instead.
- The visual identity (amber CRT tokens, VT323 and Plex Mono) and the teacher's sample-game structure.
- Counts derived from `NCH`, `NST` and `ACH.length`. Some copy still hardcodes "53" (the footer, and the `guide`, `hcgrad` and `streak53` descriptions), so update those strings if the gate count changes.
- The game must work fully offline / with the leaderboard function unreachable — every leaderboard call is optional, timed out and caught (§6.6). Never make the leaderboard load-bearing for play.
- Never render a value that came back from `board.mjs` without `esc()` first (§6.6, §8).
- `S.mode === "hardcore"` is no longer the only wipe-on-death mode — `isWipeMode()` (`hardcore` or
  `worldwide`) now gates the three sites that actually mean "any death wipes the run": the wipe
  branch in `answer()`, the red HUD/body styling, and the debrief's "this run was wiped" note.
  Achievement logic (`iron10`/`iron25`/`hcgrad`) deliberately stays hardcore-only, not shared via
  `isWipeMode()` — check which one a new hardcore-adjacent feature actually means before wiring it
  up. Every `S.mode === "hardcore"` strict-equality check elsewhere in the file is intentional, not
  an oversight; don't broaden it without checking whether it's meant to include Mr Worldwide.
- Any `setTimeout`/`setInterval` that can fire after the screen has moved on must be cancellable
  (`tNext`, `mwTick`, `typing`, all cleared by `cancelPending()`). A bare, uncancelled `setTimeout`
  was a cosmetic bug before Mr Worldwide's 15s clock existed; with it, a stray pending call can
  re-arm a second clock on top of the debrief or fire mid-navigation. Call `cancelPending()` at the
  top of any new function that can interrupt a live question.

### Common tasks

| Task | How |
|---|---|
| Fix a question's wording | Edit `q`, `o`, `g` or `w` in place. Saves are unaffected. |
| Add a gate | Append to the right topic block. Renumber every following `id`. Topics must stay contiguous (`STRAND_LAST` and the progress ticks rely on it). **Bump `LS`.** |
| Add a topic | Add to `STRAND` (key, name, short), add gates, then add a `t_<key>` achievement to `ACH`. **Bump `LS`.** |
| Add an achievement | Add it to `ACH` and call `unlock()` from `checkAfterCorrect`, `checkAfterGate`, `answer` or a command. Note `unlock()`'s guard suppresses every achievement except `worldwide` while `S.mode === "worldwide"` — a new achievement is silently unearnable there unless that's the intent. |
| "Start from Term X" option (suggested earlier, not built) | Add a picker after mode selection that sets `S.ch` to the first gate index of the chosen term. Consider stopping topic-complete, `guide` and `hcgrad` achievements unlocking when the learner didn't start at Gate 01. |
| Balance answer lengths | Content pass so distractors match the correct option's length and detail. |
| Cap death log | In `answer`, `if (S.deaths.length > 300) S.deaths.shift();` |

### Commit hygiene

- Batch related changes into one push. Each push to `main` costs 15 Netlify credits.
- Run `scripts/check-content.js` before pushing any content change.
