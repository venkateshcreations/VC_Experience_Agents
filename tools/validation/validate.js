const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');

let errors = [];
function fail(msg){ errors.push(msg); }

// check skills
const groups = ['experience-strategy','ux-architecture','visual-design','design-systems','experience-engineering','ai-native-ux','accessibility','validation','optimization','delivery'];
const skillDirs = [];
for (const g of groups) {
  const base = path.join(root,'skills',g);
  if (!fs.existsSync(base)) { fail('missing group dir '+g); continue; }
  for (const name of fs.readdirSync(base)) {
    const skillPath = path.join(base,name,'SKILL.md');
    if (!fs.existsSync(skillPath)) { fail('missing SKILL.md '+g+'/'+name); continue; }
    const content = fs.readFileSync(skillPath,'utf8');
    if (!/^---\n/.test(content)) fail('no frontmatter '+g+'/'+name);
    const nameMatch = content.match(/^name:\s*(.+)$/m);
    const descMatch = content.match(/^description:\s*(.+)$/m);
    if (!nameMatch) fail('no name '+g+'/'+name);
    if (!descMatch) fail('no description '+g+'/'+name);
    if (nameMatch && nameMatch[1].trim() !== name) fail('name mismatch '+g+'/'+name);
    skillDirs.push({group:g,name});
  }
}

// catalog
const catalogPath = path.join(root,'resources','skill-catalog.json');
if (!fs.existsSync(catalogPath)) fail('missing catalog');
else {
  const catalog = JSON.parse(fs.readFileSync(catalogPath,'utf8'));
  if (!catalog.skills || !Array.isArray(catalog.skills)) fail('catalog skills invalid');
  // check each skill has catalog entry
  const ids = new Set(catalog.skills.map(s=>s.id));
  for (const s of skillDirs) {
    if (!ids.has(s.name)) fail('catalog missing '+s.name);
  }
  // check paths exist
  for (const e of catalog.skills) {
    if (!fs.existsSync(path.join(root,e.path))) fail('catalog path missing '+e.path);
  }
  // duplicates
  const seen = new Set();
  for (const e of catalog.skills) {
    if (seen.has(e.id)) fail('duplicate catalog id '+e.id);
    seen.add(e.id);
  }
}

if (errors.length) {
  console.error('VALIDATION FAILED');
  for (const e of errors) console.error(' - '+e);
  process.exit(1);
} else {
  console.log('VALIDATION PASSED: '+skillDirs.length+' skills');
}
