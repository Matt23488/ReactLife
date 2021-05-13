const fs = require('fs');
const path = require('path');

const templates = {
    cells: 'export const ?name? = new PlaintextPattern(\'?data?\');',
    rle: 'export const ?name? = new RLEPattern(\'?data?\');',
};

function applyTemplate(type, name, data) {
    return templates[type].replace(/\?name\?/g, name).replace(/\?data\?/g, data.replace(/\r?\n/g, '\\n'));
}

const patternExports = [];
fs.readdirSync('./Patterns').forEach(pattern => {
    const patternData = fs.readFileSync(path.join('./Patterns', pattern)).toString();
    const [ name, type ] = pattern.split('.');
    patternExports.push({ name, ts: applyTemplate(type, name, patternData) });
});

const replacementString = `//--PATTERNS\n${patternExports.map(e => e.ts).join('\n')}\nexport const allPatterns: { [key: string]: Pattern } = { ${patternExports.map(e => e.name).join(', ')} };\n//--END`;
const code = fs.readFileSync('./src/Life/Patterns.ts').toString();

fs.writeFileSync('./src/Life/Patterns.ts', code.replace(/\/\/--PATTERNS[\s\S]*\/\/--END/i, replacementString));