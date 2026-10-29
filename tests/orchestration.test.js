const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname,'..');

test('orchestrator spec exists', () => {
  assert.ok(fs.existsSync(path.join(root,'agents','orchestrator','ORCHESTRATOR.md')));
});

test('capability groups present', () => {
  const groups = ['experience-strategy','ux-architecture','visual-design','design-systems','experience-engineering','ai-native-ux','accessibility','validation','optimization','delivery'];
  for (const g of groups) assert.ok(fs.existsSync(path.join(root,'skills',g)));
});
