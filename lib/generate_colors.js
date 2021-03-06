const fs = require('fs');

const colors = JSON.parse(fs.readFileSync('./data/color.json', 'utf8'));
let output = '/** Auto generate color file */\n\n';
output += `import {Color} from './utils';\n\n`;

colors.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

let docs = '# Getting Started\n\n';
docs += "## Usage\n```javascript\nimport {color} from 'web-color';\n\nconst red = color.RED\n```\n\n";
docs += '## Full Color List\n\n' 
docs += '| Name | RGB | Hex |\n'
docs += '-------|-------|---\n'
let allColors = '';
for (const color of colors) {
    output += `export const ${color.name} = new Color(${color.red}, ${color.green}, ${color.blue});  // ${color.hex}\n`;
    docs += `| ${color.name} | ${color.red}, ${color.green}, ${color.blue} | ${color.hex} |\n`;
    allColors += `  ${color.name},\n`;
}

let idx = `import {Color} from './lib/utils';\n`;
idx += `import * as color from './lib/color';\n`
idx += `import {\n${allColors}} from './lib/color';\n`;
idx += `export {\n  Color, \n  color,\n${allColors}};\n`

fs.writeFileSync('./lib/color.ts', output, 'utf8');
fs.writeFileSync('./docs/README.md', docs, 'utf8');
fs.writeFileSync('./index.ts', idx, 'utf8');
