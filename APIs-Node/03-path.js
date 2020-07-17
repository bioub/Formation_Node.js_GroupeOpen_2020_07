const path = require('path');

const packagePath = './package.json';
const absPackagePath = path.join(__dirname, packagePath);

console.log(path.join('logs', '..', 'logs', 'app.log'));
console.log(path.resolve('logs', 'app.log'));

console.log(path.isAbsolute(packagePath));
console.log(path.extname(packagePath));

console.log(path.isAbsolute(absPackagePath));
console.log(path.parse(absPackagePath));
