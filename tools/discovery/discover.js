const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');
console.log('Discovery sources:');
console.log(fs.readFileSync(path.join(root,'resources','registry-sources.yaml'),'utf8'));
console.log('No network calls performed. Review before import.');
