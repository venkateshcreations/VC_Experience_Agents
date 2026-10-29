const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');
const catalog = JSON.parse(fs.readFileSync(path.join(root,'resources','skill-catalog.json'),'utf8'));
console.log(JSON.stringify(catalog,null,2));
