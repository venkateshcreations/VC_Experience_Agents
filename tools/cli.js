#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const catalog = JSON.parse(fs.readFileSync(path.join(root,'resources','skill-catalog.json'),'utf8'));

function list() {
  for (const s of catalog.skills) console.log(s.id+'  ['+s.group+']  '+s.description);
}
function search(q) {
  const ql = (q||'').toLowerCase();
  for (const s of catalog.skills) {
    if (s.id.includes(ql) || s.description.toLowerCase().includes(ql) || s.group.includes(ql)) console.log(s.id+'  ['+s.group+']');
  }
}
function inspect(name) {
  const e = catalog.skills.find(s=>s.id===name);
  if (!e) { console.error('not found'); process.exit(1); }
  console.log(fs.readFileSync(path.join(root,e.path),'utf8'));
}
function discover() {
  console.log('Registered sources: see resources/registry-sources.yaml');
}

const cmd = process.argv[2];
const arg = process.argv.slice(3).join(' ');
if (cmd==='list') list();
else if (cmd==='search') search(arg);
else if (cmd==='inspect') inspect(arg.trim());
else if (cmd==='discover') discover();
else { console.log('Usage: vc-experience list|search <q>|inspect <name>|discover'); }
