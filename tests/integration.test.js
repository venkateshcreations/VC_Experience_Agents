const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname,'..');

test('catalog has version and skills', () => {
  const c = JSON.parse(fs.readFileSync(path.join(root,'resources','skill-catalog.json'),'utf8'));
  assert.ok(c.version);
  assert.ok(Array.isArray(c.skills));
});

test('no duplicate ids', () => {
  const c = JSON.parse(fs.readFileSync(path.join(root,'resources','skill-catalog.json'),'utf8'));
  const ids = c.skills.map(s=>s.id);
  assert.strictEqual(new Set(ids).size, ids.length);
});
