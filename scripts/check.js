// scripts/check.js — run from the repo root: node scripts/check.js [--strict] [--gates 7,37,53]
// Dev-only tool. Not loaded by the site.
// 1. Structure check (CLAUDE.md §10.1): ids, 5 steps, 4 unique options, required fields, no "<".
// 2. Difficulty lint (difficulty-plan.md §7): flags questions guessable without knowing the content.
// --gates limits both checks to those gate ids (topic share is computed over the selected gates).
// --strict exits 1 on any FAIL.
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const m = html.match(/var CHAMBERS = \[([\s\S]*?)\];\s*var NCH/);
if (!m) throw new Error('CHAMBERS block not found');
const C = eval('[' + m[1] + ']');

const argv = process.argv.slice(2);
const gi = argv.indexOf('--gates');
const only = gi >= 0 ? new Set(argv[gi + 1].split(',').map(Number)) : null;

const T = {
  lenRatioMin: 0.75,        // correct length ÷ mean distractor length
  lenRatioMax: 1.33,
  shortOptionChars: 25,     // skip length checks when every option is this short
  longestPerTopicMax: 0.35, // share of questions where correct option is strictly longest
  leakShare: 0.6,           // share of next answer's words found in previous g text
  echoGap: 0.2,             // stem overlap with correct minus best distractor overlap
  notPerGateMax: 1
};
const words = s => s.toLowerCase().replace(/[^a-z0-9%]+/g, ' ').split(' ').filter(w => w.length > 3);
const fails = [], warns = [], topic = {};

// Structure (always over the whole file)
C.forEach((c, i) => {
  if (c.id !== i + 1) fails.push(`gate ${c.id}: id should be ${i + 1}`);
  ['strand', 'name', 'intro'].forEach(k => { if (!c[k]) fails.push(`gate ${c.id}: missing ${k}`); });
  if (c.steps.length !== 5) fails.push(`gate ${c.id}: ${c.steps.length} steps`);
  c.steps.forEach((s, j) => {
    const k = `${c.id}.${j + 1}`;
    ['n', 'q', 'g', 'w'].forEach(f => { if (!s[f]) fails.push(`${k} missing ${f}`); });
    if (s.o.length !== 4) fails.push(`${k} has ${s.o.length} options`);
    if (new Set(s.o).size !== s.o.length) fails.push(`${k} duplicate options`);
    if (JSON.stringify(s).includes('<')) fails.push(`${k} contains "<"`);
  });
});

// Difficulty lint
C.filter(c => !only || only.has(c.id)).forEach(c => {
  let notCount = 0, prevNot = false;
  c.steps.forEach((s, j) => {
    const k = `${c.id}.${j + 1}`, cor = s.o[s.c || 0], dis = s.o.filter((_, i) => i !== (s.c || 0));
    const t = topic[c.strand] = topic[c.strand] || { n: 0, longest: 0 };
    t.n++;
    const allShort = s.o.every(o => o.length <= T.shortOptionChars);
    if (cor.length > Math.max(...dis.map(d => d.length))) t.longest++;
    if (!allShort) {
      const r = cor.length / (dis.reduce((a, d) => a + d.length, 0) / dis.length);
      if (r < T.lenRatioMin || r > T.lenRatioMax) fails.push(`${k} length ratio ${r.toFixed(2)} — "${s.q}"`);
    }
    const isNot = /\b(NOT|INCORRECT|FALSE)\b/.test(s.q);
    if (isNot) notCount++;
    if (isNot && prevNot) fails.push(`${k} two NOT/INCORRECT stems in a row`);
    prevNot = isNot;
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
  if (share > T.longestPerTopicMax) fails.push(`topic ${k}: correct option strictly longest in ${(share * 100).toFixed(0)}% of questions (${t.longest}/${t.n})`);
});

const scope = only ? `gates ${[...only].join(',')}` : 'all gates';
console.log(`gates ${C.length}, stages ${C.reduce((a, c) => a + c.steps.length, 0)} — lint scope: ${scope}`);
console.log(`\nFAIL ${fails.length}\n` + fails.join('\n'));
console.log(`\nWARN ${warns.length}\n` + warns.join('\n'));
process.exit(fails.length && argv.includes('--strict') ? 1 : 0);
