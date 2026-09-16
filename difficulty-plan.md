# difficulty-plan.md — Making PASSPORT's questions harder

**Status:** plan only. Nothing in `index.html` has been changed yet.
**Companion doc:** `CLAUDE.md` (architecture, data model, save rules).
**Goal:** make all four options on every question sound similar, so learners must actually know the Grade 10 Tourism content to answer. Guessing, picking the longest option or ruling out silly options should stop working.

---

## 1. Why the questions are easy now

A baseline audit was run over all 265 questions (53 gates × 5 stages) in the live `index.html`.

| Problem | Measurement | Effect |
|---|---|---|
| The correct option is the longest | Longest or tied in **200 / 265 (75%)**; strictly longest in 181 (68%). Random chance is 25%. | "Pick the longest answer" wins most of the time |
| Length gap | Correct option is on average **2.13×** the length of the wrong options | The same giveaway, measured by size |
| Worst topics (strictly longest) | Communication and customer care **96%**, Sustainable tourism **84%**, Attractions 70%, Sectors 68% | Some topics can be passed almost blind |
| Wrong options from a different world | **196 / 265** questions share almost no words between the correct and wrong options (average overlap 0.069) | Wrong options are easy to rule out |
| Joke options | e.g. "Print money", "Hire unfriendly staff", "Burying litter", "Painting the hotel green", "Report it later" | A 4-option question becomes a 2-option guess |
| Feedback gives away the next answer | **10** cases: 1.3→1.4, 2.2→2.3, 13.3→13.4, 23.1→23.2, 25.3→25.4, 31.4→31.5, 43.1→43.2, 44.2→44.3, 47.1→47.2, 48.4→48.5 | The green text answers the next question |
| Question wording matches the answer | **22** warnings, e.g. 22.3 "virtual walk" → Google Street View, 14.5 "publishes statistics" → Statistics SA | Matching words gives the answer away |
| Absolute words in wrong options | **33** warnings ("only", "never", "always", "nothing") | Test-wise learners rule these out |

**Baseline lint result** (`scripts/lint-difficulty.js`, §7): **179 failures and 55 warnings.**

- 160 questions outside the length-ratio band
- 10 feedback leaks
- all 8 topics over the "correct option is longest" limit
- 1 gate with too many NOT-style questions
- 33 absolute-word warnings and 22 wording-match warnings

**Root cause:** the wrong options were written to be *obviously wrong*, instead of being *plausibly wrong for someone who hasn't learnt the content*.

---

## 2. Design principle

> **Every wrong option must be a real fact from the study guide that belongs to something else.**

A learner who half-knows the content should find the wrong options genuinely tempting. A learner who knows the content should find exactly one option defensible.

---

## 3. Techniques for writing wrong options

Use these five techniques. Mix them within a gate so the pattern isn't predictable.

### 3.1 Similar names

Swap in sibling organisations, places or terms that look or sound alike.

- **Before:** *Who is responsible for grading…?* TGCSA / SATSA / SAHRA / ASATA. The acronyms come from different areas, so "grading" is enough to find the answer.
- **After:** *Which organisation grades accommodation and conference venues using a star system?*
  - Tourism **Grading** Council of South Africa ✓
  - Tourism **Business** Council of South Africa
  - South African Tourism **Services** Association
  - Federated **Hospitality** Association of South Africa

### 3.2 Mixed-up facts

Use the real attributes of sibling items, attached to the wrong item.

- *Which statement describes the Kgalagadi Transfrontier Park?*
  - South Africa and Botswana, joined in 2000, Africa's first TFP ✓
  - Joined in 2003 and jointly managed with the local Nama people (/Ai-/Ais-Richtersveld)
  - Will link South Africa, Mozambique and Zimbabwe (Great Limpopo)
  - Shared by South Africa, Botswana and Zimbabwe, and includes Mapungubwe (Limpopo-Shashe TFCA)

### 3.3 Describe the situation, ask for the term

Don't name the concept in the question. Give the symptom or situation and ask which concept explains it. This removes word-matching and good-versus-bad judging.

- **Before:** *Which is a consequence of poor service delivery?* The only negative option is obviously correct.
- **After:** *A hotel's advertising spend keeps rising and staff keep resigning. Which does the study guide link this to?*
  - Poor service delivery ✓
  - Leakage
  - Overdependence on tourism
  - External costs

### 3.4 Wrong numbers that are real numbers

Every wrong figure should be a genuine figure from somewhere else in the guide, in the same unit.

- *How deep is the Big Hole?* 215 m ✓ / 216 m (Bloukrans Bridge height) / 56 m (Augrabies Falls) / 90 m
- *Average business trip (2009)?* 7 nights ✓ / 4,5 (average domestic trip) / 5 (average holiday) / 5,2 (Limpopo average stay)

Only use a made-up number, like "90 m" above, when three real numbers in the same unit don't exist, and make sure it matches nothing else in the guide.

### 3.5 Two-part answers

Build all four options from the combinations of two halves, so learners must know both halves.

- *Travel within a province is ___ and makes up about ___ of tourists.*
  - intra-provincial; 60% ✓
  - inter-provincial; 60%
  - intra-provincial; 40%
  - inter-provincial; 40%

Gate 27.2 already nearly follows this pattern and is the model to copy. Use it where the guide pairs two facts: capital + province, festival + town + month, park + province, department + function, mode + disadvantage.

---

## 4. Rules every question must pass

1. **One correct answer by the guide.** Each wrong option must be contradicted by an explicit statement in the study guide. If a learner could argue a wrong option with the guide open, rewrite it. This matters most in **hardcore mode**, where one unfair question wipes a whole run.
2. **Options look alike.**
   - Same grammar (all noun phrases, or all full statements).
   - Same format (all acronyms, or all full names).
   - Lengths close: the correct option's length ÷ the wrong options' average length is between **0.75 and 1.33**, unless every option is 25 characters or shorter.
3. **The correct option is not the "tell".** Within each topic, it is strictly the longest in **no more than 35%** of questions.
4. **No joke options,** and no absolute words (only, never, always, nothing) in wrong options unless the guide itself uses them.
5. **No hints elsewhere.**
   - The story line (`n`) and the question (`q`) must not contain the distinctive words of the correct answer.
   - The green feedback (`g`) must not contain the answer to the **next** question in the same gate. Where the green text lists a whole group of facts (e.g. every rail service), either reorder the stages or trim that list.
6. **Limited trick questions:** at most one NOT/INCORRECT/FALSE question per gate, and never two in a row.
7. **Four options** stay, matching the A–D format of their exams.
8. **Wrong-answer text (`w`) teaches the difference.** It names the correct answer *and* says which sibling each tempting wrong option actually belongs to, e.g. "Kgalagadi. Joined in 2003 with the Nama is /Ai-/Ais-Richtersveld."
9. **Only use wording from the guide.** Keep the guide's spellings where exams expect them (see §6 for exceptions already in place).

---

## 5. Confusion bank (Phase 1 starting point)

These are the families of things learners mix up, taken from the study guide. **Every wrong option must be drawn from one of these families.** Before use, confirm each entry against the guide and record the page number in the review sheet (§8).

### 5.1 Term 1 · Tourism sectors (gates 1–18)

- **Tourism types:**
  - Inbound vs outbound; tourist (more than a day, less than a year) vs excursionist (same day).
  - Domestic / regional / international. Exam examples: Durban→Kimberley = domestic; Aimee→Zimbabwe and the President→Zambia/Tanzania = regional; Japanese group→SA and John→New York = international.
- **Tourist types vs transport:** the tourist types list (business, leisure, VFR, youth, adventure, eco, cultural, religion, sport and recreation, SIT, incentive, health) vs extraordinary transport (camels, donkey carts, hot air balloons, bicycles).
- **Road transport:** Baz Bus (backpackers) / Greyhound and Intercape (coach companies) / shuttle buses (airports, harbours, terminals) / chartered buses (tour groups) / metered taxi (distance) / minibus taxi (no timetable) / hired motorbikes (self-drive).
- **Rail:** Gautrain (OR Tambo–Johannesburg–Pretoria) / Blue Train (luxury, weekly, Cape Town–Pretoria) / Rovos Rail (private luxury, crosses borders) / Shosholoza Meyl (city to city) / Metrorail (commuter) / tram (Kimberley, Big Hole).
- **Air:** aeroplanes (fast, expensive, major centres) / chartered small aircraft (executives, wealthy tourists) / helicopters (small airfields, viewing attractions) / microlights (1–2 people, adventure).
- **Advantages and disadvantages by mode:** car / bus / minibus taxi / aeroplane / train / cruise liner. Swap an advantage or disadvantage onto the wrong mode.
- **Accommodation requirement lists:** formal service / guest / self-catering / caravan and camping / backpackers / game lodges. Each item belongs to exactly one list, so swap items between lists.
- **Grading:**
  - Owner steps (read requirements, choose assessor, apply, make appointment).
  - Assessor steps (visit, discuss, recommend with photos).
  - TGCSA role (train assessors, approve or reject findings, supply plaques, feedback system, checks).
  - Benefits for tourists vs for establishments.
  - Other owner obligations (provincial registration, tax clearance, public liability insurance, liquor licence, BEE).
  - Validity: 1 year.
- **Room and pricing terms:** double / twin / family / suite / en suite / penthouse; pp / pps / pppn / pppd; single supplement / fully inclusive; continental / English / buffet / à la carte / room service.
- **In-room technology categories:** information / comfort / entertainment / safety / environmental / work. Swap items between categories.
- **Food and beverage:** fine dining / family / coffee shops / pubs and bars / ice cream stores / fast food / taverns and shebeens / street stalls.
- **Attractions:**
  - Five sub-sectors (gaming and lotteries, leisure, conservation, sport and recreation, events and conferences).
  - MICE; natural vs constructed; primary vs secondary.
  - The attraction→appeal table (Cape Town, Winelands, Garden Route, Johannesburg, Kruger, Durban, Robben Island, Soweto, Blyde River Canyon, Wild Coast).
  - Activities by attraction type (scenic beauty, beaches, tourist routes, cultural villages, theme parks).
- **Public sector levels:** NDT (vision vs mission) / provincial departments (promote and regulate) / provincial authorities (permits) / regional destination marketing / DMO / LTO (smallest).
- **Government departments:** DHA (passports, immigration) / DIRC (visas, Univisa, TFPs) / DTI (SMMEs, exports) / StatsSA / Sports and Recreation (events, IOC) / Transport (PRASA, costs, safety).
- **Ownership types:**
  - Parastatal: wholly government owned, run like a business, profit (SAA, Transnet, Eskom).
  - Partly state-owned agency: shared with the private sector, managed like a private business (TEP).
  - Public entity: small department, one function (SANParks, SA Tourism, NGB, SAHRA, ACSA, CATHSSETA).
- **Private sector:** product owners / local communities / NGOs and CBOs / professional associations.
- **Associations:** TBCSA / TGCSA / FTTSA / SATSA / FEDHASA / ASATA / SAACI / SAVRALA / SAYTC. Swap main functions and services offered between them.
- **International bodies:** SADC / UNWTO (Madrid, poverty reduction) / WTTC (business leaders) / WWF (1961, 1 300+ projects, mission).
- **Payments:**
  - Internet / cellphone / ATM (card kept after 3 wrong PINs) / speed point (portable, card stays in sight) / credit card / debit card (immediate EFT) / personal cheque (may bounce) / bank-guaranteed cheque (fee, secure).
  - Swap the advantages and disadvantages between methods.

### 5.2 Term 2 · Map work (gates 19–25)

- **Map tools:** legend (symbols) / scale (1:50 000 = 0,5 km) / distance indicators / grid references / compass (16 points, 4 cardinal).
- **Lines and time:**
  - Longitude (15°, 24 zones, pole to pole) vs latitude (parallel to the Equator).
  - Greenwich Meridian (0° longitude) vs Equator (0° latitude) vs IDL (180°).
  - East of Greenwich = later vs west = earlier. Cape Town UTC+2 (30° E) vs New York UTC−5 (75° W). SAST set by 30° E. SA has 1 time zone.
- **Map types:** general reference / road / street / political / physical (blue water; green/yellow low; orange/brown high) / specialist (airports, rail, climate) / tourist information / tourist attraction.
- **Digital tools:** GPS / Google Earth (3D satellite) / Street View (virtual walks) / Google Street maps (route planner) / interactive maps (province→town→attraction).
- **Capitals:** Limpopo–Polokwane, North West–Mafikeng, Gauteng–Johannesburg, Mpumalanga–Nelspruit, Northern Cape–Kimberley, Western Cape–Cape Town, Eastern Cape–Bisho, Free State–Bloemfontein, KZN–Pietermaritzburg. Swap capitals between provinces.
- **Map features:**
  - International airports (OR Tambo, Cape Town, King Shaka) vs domestic airports (Bloemfontein, East London, George, Kimberley, Port Elizabeth, Pilanesberg, Upington, Lanseria) vs harbours.
  - Rivers vs dams vs mountains (e.g. Gariep is both a river and a dam, so avoid ambiguous uses).
  - The 8 World Heritage Sites vs other attractions.
  - The 3 TFPs vs the 2 TFCAs.
  - 7 continents; 2 oceans.
- **Travel time:** distance ÷ 100 km/h; other factors (stops, speed limit, road and weather conditions).

### 5.3 Term 2 · Domestic tourism (gates 26–27)

- **Positive vs negative:** negative influences (unemployment, interest and inflation, cost of living, less spending money, tourism new to SA culture) vs benefits (economy / people / environment). Swap benefits between the three groups.
- **Growth methods** vs Sho't Left facts (taxi language, targets youth, works with ASATA, Enterprise Programme).
- **Statistics:**
  - Intra-provincial ≈ 60% vs inter-provincial ≈ 40%. Gauteng and North West have the most inter-provincial tourists.
  - Sources Gauteng + KZN vs destinations KZN + Eastern Cape.
  - Trip lengths: domestic 4,5 / business 7 / holiday 5 nights. Province stays: Limpopo 5,2 (longest), North West 3,5 (shortest), Gauteng 3,6, Northern Cape 5, Western Cape 4,6, Eastern Cape 4,5, Mpumalanga 4,4, KZN 4,3, Free State 4.
  - R730 per trip; popular activities.

### 5.4 Term 3 · Attractions (gates 28–37)

- **Attraction → province:** swap attractions between provinces. Examples: God's Window (MP), Great Fish River (EC), SALT (NC), Cango Caves (WC), African Ivory Route (LP), Golden Mile (KZN), Cradle of Humankind (GP), Vredefort Dome (FS), Pilanesberg (NW).
- **Festivals and events:**
  - National Arts Festival (Grahamstown, June/July)
  - Aardklop (Potchefstroom, 5 days, Sept/Oct)
  - Klein Karoo National Arts Festival (Oudtshoorn, Afrikaans)
  - Fish River Canoe Marathon (Sept/Oct)
  - Comrades (90 km, PMB–Durban)
  - Cape Argus (109 km, March)
  - Sardine Run (May–July)
- **Numbers:** Bloukrans 216 m / Big Hole 215 m deep, 1,6 km wide / Augrabies 56 m, 55 000 ha / Vredefort crater 380 km wide, 2 billion years / Blyde 25 000 ha / Table Mountain NP 25 000 ha / Kruger 2 million ha / Ivory Route 2 000 km, 3,6 million ha / Kgalagadi 38 000 km² / Eureka 21,25 carats / Mrs Ples ≈ 2,8 million years / Little Foot 4 million years / Namaqua 3 500+ species, 1 000 endemic.
- **Superlatives and firsts:**
  - iSimangaliso: first WHS, largest estuarine system.
  - Kgalagadi: Africa's first TFP.
  - uKhahlamba: highest range, largest rock painting group.
  - Kruger: largest game reserve.
  - Addo: third largest park.
  - Blyde: third largest canyon.
  - SALT: largest Southern Hemisphere telescope.
  - Big Hole: largest hand-dug hole.
  - Bloukrans: highest bridge in Africa, highest bungee.
  - Comrades: largest and oldest ultra-marathon.
  - Cape Argus: largest timed cycling event.
  - Modjadji: oldest and largest cycads.
- **Species → place:** bearded vulture (Golden Gate; Maloti-Drakensberg) / Cape gannet (Addo; West Coast) / African penguin (Addo) / pygmy falcon and sociable weaver (Kgalagadi) / ghost frog (Table Mountain) / Knysna seahorse (Garden Route NP) / Cape mountain zebra (Mountain Zebra NP) / Hartmann's mountain zebra and halfmens (/Ai-/Ais) / bontebok (Bontebok NP) / quiver trees (Augrabies; Namaqua).
- **Private reserves:** Shamwari (EC, Born Free) / Madikwe (NW, airstrip) / Phinda (KZN, Mzinene River, 7 habitats) / Sabi Sabi (southern Kruger, Elefun).
- **Botanical gardens:** Kirstenbosch (Table Mountain) / Walter Sisulu (Roodepoort) / Free State NBG (fossilised tree). All run by SANBI.
- **Environments:** natural / man-made / physical / cultural.
- **Cross-border areas:** the TFPs and TFCAs with their countries and years.

### 5.5 Term 3 · Sustainable tourism (gates 38–42)

- **Impacts:** environmental negative vs positive; social negative vs positive; economic positive (income, employment, balance of payments, investment) vs negative (inflation, leakage, external costs, overdependence).
- **Similar economic terms:** leakage / inflation / external costs / overdependence. Use "describe the situation, ask for the term" questions here.
- **Behaviour and practices:** tourist rules vs good practices (litter / energy / water / scarce resources). Swap practices between the four practice groups.
- **Global warming:**
  - Causes (greenhouse gases, deforestation: trees 50% carbon, 25% of human CO₂).
  - Carbon footprint (12,81 t per household); green tourism practices.
  - Consequences (flooding, seasons/Namaqualand, emissions tax, environmental departure tax, extinctions).
- **Who does what:** establishment actions (save electricity, 3 Rs) vs tourist actions (planning / transport / at the accommodation).

### 5.6 Term 3 · Marketing (gates 43–44)

- **Terms:** products vs services; market share / competitive edge / target market / market segments / core markets / niche markets.
- **Aims and research:** marketing aims vs market research questions (customer / competition / broader market / financing).
- **The 5 Ps:** product / price / place / promotion / people, with the guide's examples. Swap the examples between Ps.
- **Research resources and planning:** outsourcing / in-house / co-operative; research plan.

### 5.7 Term 4 · Culture and heritage (gates 45–48)

- **Core distinctions:** culture vs heritage; living = intangible vs non-living = tangible.
- **Beliefs about culture:** symbols (wedding rings) / learned (lobola) / shared (bridal showers) / dynamic (lobola cattle → money). ⚠ The guide uses lobola for two different beliefs, so don't use lobola as the only clue.
- **Elements of culture and their examples:** literature / architecture / arts and crafts / cuisine / music and dance. Swap examples between elements.
- **Bodies:** NHRA (law) / SAHRA (criteria, plaques) / UNESCO (worldwide).
- **Values and criteria:**
  - Values: social / economic / environmental.
  - SAHRA criteria and their examples: old hall, King Protea, San caves, Union Buildings, Voortrekker Monument, Mandela Museum, Sarah Baartman, Cape Floral Region.
- **Site types:** cultural / natural (Hole in the Wall, Vredefort, Sterkfontein caves) / mixed (Drakensberg).
- **Site categories:** World / National (Grade 1) / Provincial (Grade 2, provinces manage) / Local (Grade 3, municipalities manage, community agrees). Local-site age thresholds: rock art > 100 years vs military artefacts > 75 years.
- **Specific sites:**
  - Sunland Baobab: 6 000 years, 1993, about 60 people, natural, local.
  - Mandela Museum: Bhunga Building = gifts; Mvezo = born 1918; Qunu = grew up, living museum.
  - Heritage Day: 24 September.

### 5.8 Term 4 · Communication and customer care (gates 49–53)

- **Devices:** landline and switchboard / cellphone and SMS / fax / photocopier / printer / computer / email / video conferencing vs teleconferencing. Swap advantages and disadvantages between devices. This is the main fix for Communication, where the correct answer is longest 96% of the time.
- **Communication process:** sender / coding / message / code analysing / receiver / feedback.
- **Written vs verbal:** written forms vs verbal types.
  - Interpersonal (direct face to face, indirect by phone)
  - Small group (direct)
  - Public (airport announcement = indirect; air hostess = direct)
  - Mass (TV, delayed feedback)
- **Telephone and signs:** 4 Ps of the telephone (promptness 5–10 s / 3 rings, politeness, preparation, professionalism) vs the 5 Ps of marketing. Road signs: white on brown.
- **Service excellence:** definition / importance / characteristics (intangible, includes the provider, varies, can't be stored) / consequences of poor service / advantages of excellent service / recommendations. Swap items between these groups.

### 5.9 Known guide ambiguities — do not build wrong options on these

| Issue | Rule |
|---|---|
| IDL direction (the guide's answer key is backwards) | Don't ask about direction; position only (180°) |
| Kruger: "Mpumalanga and Limpopo" in the SANParks notes vs "Limpopo" in the answer key | Never use Mpumalanga or Limpopo as a wrong option for Kruger's province |
| Vredefort Dome: exam answer "Free State and Gauteng" vs Free State in the notes | Ask what it is, not which province |
| Bloukrans Bridge: on the EC/WC border, answer key says EC | Don't offer Western Cape as a wrong option |
| National vs provincial heritage examples (unclear table) | Only use: Battlefields = provincial, the Grade numbers, and the 8 WHS |
| Lesedi "in the Cradle of Humankind" but listed under North West | Don't ask which province Lesedi is in |
| Lobola used for both "learned" and "dynamic" | See §5.7 |
| "Eleven languages" (current count differs) | Keep as per the guide; don't swap it with other numbers |
| Old place names (Nelspruit, Mafikeng, Bisho, Swaziland) | Keep exam names in options; current names stay in the green feedback only |
| Gariep is both a river and a dam | Don't use Gariep as a wrong option in river-vs-dam questions |

---

## 6. Constraints carried over from `analysis.md`

- **Preserve saves.** Keep **53 gates × 5 stages in the same order.** Only edit `n`, `q`, `o`, `g` and `w` (and `intro` or `name` if needed). Then saved progress and achievements carry over and **`LS` must not change**.
  - If a stage has to be moved to fix a feedback leak, prefer trimming the previous `g` text instead of reordering.
  - If reordering is unavoidable, it's a structural change: bump `LS` and tell the owner.
- **Keep the option-order convention:** correct option at `o[0]`, `c` omitted. The engine shuffles the display order.
- **No `<` in content,** 4 options, South African English.
- **No engine or UI changes** are required for this work.

---

## 7. Automated difficulty lint

Save as `scripts/lint-difficulty.js` in the repo and run from the repo root. It reads `CHAMBERS` straight out of `index.html`.

```js
// scripts/lint-difficulty.js — run: node scripts/lint-difficulty.js [--strict]
// Flags questions that are guessable without knowing the content.
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const m = html.match(/var CHAMBERS = \[([\s\S]*?)\];\s*var NCH/);
if (!m) throw new Error('CHAMBERS block not found');
const C = eval('[' + m[1] + ']');

const T = {
  lenRatioMin: 0.75,       // correct length ÷ mean distractor length
  lenRatioMax: 1.33,
  shortOptionChars: 25,    // skip length checks when every option is this short
  longestPerTopicMax: 0.35,// share of questions where correct option is strictly longest
  leakShare: 0.6,          // share of next answer's words found in previous g text
  echoGap: 0.2,            // stem overlap with correct minus best distractor overlap
  notPerGateMax: 1
};
const words = s => s.toLowerCase().replace(/[^a-z0-9%]+/g, ' ').split(' ').filter(w => w.length > 3);
const fails = [], warns = [], topic = {};

C.forEach(c => {
  let notCount = 0;
  c.steps.forEach((s, j) => {
    const k = `${c.id}.${j + 1}`, cor = s.o[s.c || 0], dis = s.o.filter((_, i) => i !== (s.c || 0));
    const t = topic[c.strand] = topic[c.strand] || { n: 0, longest: 0 };
    t.n++;
    if (new Set(s.o).size !== s.o.length) fails.push(`${k} duplicate options`);
    if (s.o.length !== 4) fails.push(`${k} has ${s.o.length} options`);
    const allShort = s.o.every(o => o.length <= T.shortOptionChars);
    if (cor.length > Math.max(...dis.map(d => d.length))) t.longest++;
    if (!allShort) {
      const r = cor.length / (dis.reduce((a, d) => a + d.length, 0) / dis.length);
      if (r < T.lenRatioMin || r > T.lenRatioMax) fails.push(`${k} length ratio ${r.toFixed(2)} — "${s.q}"`);
    }
    if (/\b(NOT|INCORRECT|FALSE)\b/.test(s.q)) notCount++;
    dis.forEach(d => { if (/\b(only|never|always|nothing)\b/i.test(d)) warns.push(`${k} absolute word in distractor: "${d}"`); });
    const stem = new Set(words(s.n + ' ' + s.q));
    const hit = o => { const w = words(o); return w.length ? w.filter(x => stem.has(x)).length / w.length : 0; };
    if (hit(cor) - Math.max(...dis.map(hit)) >= T.echoGap) warns.push(`${k} stem echoes the correct option: "${cor}"`);
    const nxt = c.steps[j + 1];
    if (nxt) {
      const aw = words(nxt.o[nxt.c || 0]), gw = new Set(words(s.g));
      if (aw.length && aw.filter(x => gw.has(x)).length / aw.length >= T.leakShare)
        fails.push(`${k} feedback leaks answer to ${c.id}.${j + 2}: "${nxt.o[nxt.c || 0]}"`);
    }
  });
  if (notCount > T.notPerGateMax) fails.push(`gate ${c.id} has ${notCount} NOT/INCORRECT stems`);
});

Object.entries(topic).forEach(([k, t]) => {
  const share = t.longest / t.n;
  if (share > T.longestPerTopicMax) fails.push(`topic ${k}: correct option strictly longest in ${(share * 100).toFixed(0)}% of questions`);
});

console.log(`FAIL ${fails.length}\n` + fails.join('\n'));
console.log(`\nWARN ${warns.length}\n` + warns.join('\n'));
process.exit(fails.length && process.argv.includes('--strict') ? 1 : 0);
```

**How to use it:**

- **Baseline** (verified against the live file): `FAIL 179`, `WARN 55`.
- **Release requirement:** `FAIL 0` with `--strict`.
- **Warnings** (wording matches, absolute words) must each be reviewed by hand. Some are fine, e.g. a number that appears in both the question and the correct option.
- **Heuristics aren't perfect.** If a question legitimately fails on length (e.g. a well-known short name vs long sibling names), rewrite the options to match rather than loosening the thresholds. If that's truly impossible, add a documented `// lint-ignore: reason` convention and an allow-list to the script.
- **Run both checks:** `scripts/check-content.js` (structure, from `analysis.md` §10.1) and this lint.

---

## 8. Review sheet (fairness record)

Keep one row per wrong option in `review/questions-review.csv` (or a markdown table per topic). This is how the teacher checks fairness quickly without reading code.

| gate.stage | question | correct option | guide page | wrong option | technique (3.1–3.5) | belongs to / why wrong | guide page | reviewer OK |
|---|---|---|---|---|---|---|---|---|
| 37.2 | Which statement describes the Kgalagadi TFP? | SA + Botswana, joined 2000, Africa's first TFP | 56 | Joined 2003, jointly managed with the Nama | 3.2 | /Ai-/Ais-Richtersveld TFP | 56 | ☐ |
| 37.2 | … | … | 56 | Will link SA, Mozambique and Zimbabwe | 3.2 | Great Limpopo TFP | 56 | ☐ |
| 37.2 | … | … | 56 | SA, Botswana, Zimbabwe; includes Mapungubwe | 3.2 | Limpopo-Shashe TFCA | 56 | ☐ |

Guide page numbers refer to the printed page numbers in the Via Afrika Grade 10 Study Guide.

---

## 9. Phased plan

### Phase 0 — Tooling (short)

- Add `scripts/lint-difficulty.js` (§7) and `scripts/check-content.js` (from `analysis.md`).
- Run both. Save the baseline output as `review/lint-baseline.txt`.

### Phase 1 — Confusion bank

- Turn §5 into `review/confusion-bank.md`, confirming every entry against the guide and adding page numbers.
- **Output:** the approved families of wrong options. No question may use a wrong option from outside this bank.

### Phase 2 — Pilot (3 gates)

1. Rewrite **Gate 7 The Star Chamber**, **Gate 37 The Borderlands** and **Gate 53 Service Excellence**. These cover similar names, mixed-up facts and describe-the-situation questions.
2. Fill in the review sheet for those 15 questions.
3. The teacher signs off on fairness and style.
4. **Optional playtest:** a few learners play only those gates. Target first-time accuracy is about **55–70%**, using the in-game "clean hits" figure. Higher means the questions are still too easy; lower may mean they're unfair or unclear.
5. Adjust the rules and techniques from the feedback **before** scaling up.

### Phase 3 — Full rewrite, topic by topic

- **Order (worst first):** Communication (49–53) → Sustainable (38–42) → Domestic (26–27) → Sectors (1–18, can be split into 1–9 and 10–18) → Attractions (28–37) → Culture (45–48) → Map work (19–25) → Marketing (43–44).
- **Each batch:**
  1. Rewrite `n`, `q`, `o`, `g` and `w` following §3 and §4.
  2. Run `check-content.js` and `lint-difficulty.js --strict` on the batch, until the batch's own failures reach 0.
  3. Fill in the review sheet rows.
  4. The teacher reviews and approves.
- **Commit** locally after each approved batch. Don't push yet (see Phase 5).

### Phase 4 — Quality checks

1. **Lint:** `FAIL 0` across the whole file with `--strict`; every warning reviewed.
2. **Guessing test:** answer every question without the study guide, using only test-taking tricks. If any topic scores well above 25%, rewrite the worst questions in it. A fresh Claude session given only the questions and options, and told not to use subject knowledge, is a useful rough proxy. Treat it as a signal, not proof.
3. **Fairness test:** answer every question with the study guide open. Each must have exactly one defensible answer. Anything arguable goes back to Phase 3.
4. **Run-through:** use the Playwright simulation from `analysis.md` §10.2 to confirm the game still plays start to finish with no errors.

### Phase 5 — Release

- **One push to `main`** at the end. That's one Netlify deploy, 15 credits. Learners get the new questions on reload.
- Since gate and stage structure is unchanged, **no `LS` bump**, and learners keep their progress and achievements.
- **Update `analysis.md`:**
  - §3.4 "Known content weakness" (resolved).
  - Add a "Question-writing rules" link to this document.
  - Record the new lint numbers.

---

## 10. Definition of done

- [ ] All 265 questions rewritten. The structure is still 53 × 5 in the same order.
- [ ] `check-content.js` passes.
- [ ] `lint-difficulty.js --strict` gives `FAIL 0`, and all warnings are reviewed.
- [ ] In every topic, the correct option is strictly longest in ≤ 35% of questions.
- [ ] Zero feedback-to-next-question leaks.
- [ ] Every wrong option has a review sheet row with its source family and guide page, and teacher approval.
- [ ] The fairness test is passed: exactly one defensible answer per question with the guide open.
- [ ] The guessing test shows no topic well above chance.
- [ ] No gate has more than one NOT/INCORRECT/FALSE question.
- [ ] The Playwright run-through completes with zero page errors.
- [ ] `LS` is unchanged, and the owner has confirmed saves survive with an old save loaded before and after.
- [ ] `analysis.md` is updated.

---

## 11. Brief for Claude Code (copy into a session)

> Read `analysis.md` and `difficulty-plan.md` in the repo root. We are increasing question difficulty in `index.html` **without changing the engine, the UI, or the gate/stage structure**.
>
> Start with **Phase 0 and Phase 2 only**: add the two scripts, record the lint baseline, then rewrite Gates 7, 37 and 53 following §3–§5 (wrong options only from the confusion bank, lengths matched, no hints or leaks, `w` text explains which sibling each wrong option belongs to). Fill in `review/questions-review.csv` for those 15 questions and run both scripts. Stop and show me the diff and the review rows before touching any other gate. Do not push to GitHub.

---

## 12. Risks and how the plan handles them

| Risk | Mitigation |
|---|---|
| Two defensible answers (unfair, especially in hardcore) | Wrong options only from the confusion bank; the §5.9 ambiguity list; fairness test; teacher sign-off per batch |
| Wrong options contradict the guide or introduce facts not in it | Every wrong option has a guide page reference in the review sheet |
| Learners get frustrated | Pilot and target accuracy band before scaling; `w` text teaches the distinction so a death becomes a lesson |
| Lint thresholds encourage padding options with filler words | Reviewers reject padding; match length by choosing sibling facts of similar length, not by adding words |
| Saves break | Structure frozen; only text fields change; `LS` unchanged; checked before and after |
| Spending Netlify credits during iteration | Test locally by opening `index.html`; one push at release |
