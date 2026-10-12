const babel = require('@babel/core');
const fs = require('fs');

try {
  const code = fs.readFileSync('app.js', 'utf8');
  console.log('Compiling app.js...');
  const result = babel.transformSync(code, {
    presets: [['@babel/preset-react', { runtime: 'classic' }]],
    compact: false
  });
  fs.writeFileSync('app.bundle.js', result.code);
  console.log('SUCCESS! Created app.bundle.js, length:', result.code.length);
} catch (err) {
  console.error('COMPILATION ERROR:', err.message);
  if (err.loc) console.error('At line:', err.loc.line, 'col:', err.loc.column);
  process.exit(1);
}
