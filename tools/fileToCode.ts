// const fs = require('fs');
// const dir = fs.readdirSync('./')

// const filenames = dir.filter(i => i.endsWith('.js'));

// for(const name of filenames) {
//   const content = fs.readFileSync(name);
//   const str1 = String(content).replaceAll('\\', '\\\\');
//   const str = str1.replace(/`/g, '\\`');
//   const finalStr = str.replaceAll('$', '\\$');
//   fs.writeFileSync(name.replace('.js', '.ts'), `const str = \`${finalStr}
// \`
// export default str;
// `);
// }

const fs = require('fs');
const dir = fs.readdirSync('./');

const filenames = dir.filter((i) => i.endsWith('.js'));

for (const name of filenames) {
  const newName = name.replace(/\.js$/, '');
  console.log(`case '${newName}':
  return internal.${newName}`);
}
