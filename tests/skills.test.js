const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname,'..');

test('skill count >= 40', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(root,'resources','skill-catalog.json'),'utf8'));
  assert.ok(catalog.skills.length >= 40);
});

test('all skill files exist', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(root,'resources','skill-catalog.json'),'utf8'));
  for (const s of catalog.skills) {
    assert.ok(fs.existsSync(path.join(root,s.path)), s.path);
  }
});

test('frontmatter name matches folder', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(root,'resources','skill-catalog.json'),'utf8'));
  for (const s of catalog.skills) {
    const content = fs.readFileSync(path.join(root,s.path),'utf8');
    const m = content.match(/^name:\s*(.+)$/m);
    assert.strictEqual(m[1].trim(), s.id);
  }
});
