const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname,'..');

test('each skill has test cases section', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(root,'resources','skill-catalog.json'),'utf8'));
  for (const s of catalog.skills) {
    const c = fs.readFileSync(path.join(root,s.path),'utf8');
    assert.ok(c.includes('## Test cases'), s.id);
  }
});

test('each skill has activation conditions', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(root,'resources','skill-catalog.json'),'utf8'));
  for (const s of catalog.skills) {
    const c = fs.readFileSync(path.join(root,s.path),'utf8');
    assert.ok(c.includes('## Activation conditions'), s.id);
  }
});
