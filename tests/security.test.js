const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname,'..');

test('no obvious secrets', () => {
  const files = [];
  function walk(d){ for(const f of fs.readdirSync(d)){const p=path.join(d,f);const st=fs.statSync(p); if(st.isDirectory()) walk(p); else if(/\.(md|js|json|yaml|yml)$/.test(f)) files.push(p);} }
  walk(root);
  const bad = /sk-[a-zA-Z0-9]{20,}|AKIA[0-9A-Z]{16}/;
  for (const f of files) {
    const c = fs.readFileSync(f,'utf8');
    assert.ok(!bad.test(c), 'secret-like token in '+f);
  }
});
