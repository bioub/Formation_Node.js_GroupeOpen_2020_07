const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(__dirname, 'package.json');
const packageCopyPath = packagePath + '.copy';

// const buffer = fs.readFileSync(packagePath);
// console.log(buffer.toString('utf-8'));

// Sync
try {
  const content = fs.readFileSync(packagePath, { encoding: 'utf-8' });
  fs.writeFileSync(packageCopyPath, content);
  console.log('DONE');
} catch (err) {
  console.log(err.message);
}

// Async
// Callback Hell / Pyramid of Doom
fs.readFile(packagePath, { encoding: 'utf-8' }, (err, content) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile(packageCopyPath, content, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('DONE');
      }
    });
  }
});

// Promise based Async
fs.promises.readFile(packagePath, { encoding: 'utf-8' })
  .then((content) => fs.promises.writeFile(packageCopyPath, content))
  .then(() => console.log('DONE'))
  .catch((err) => console.log(err.message));

const fse = require('fs-extra');

// fs-extra implémente les promesses depuis longtemps
fse.readFile(packagePath, { encoding: 'utf-8' })
  .then((content) => fse.writeFile(packageCopyPath, content))
  .then(() => console.log('DONE'))
  .catch((err) => console.log(err.message));

// Pour générer des promesses
const util = require('util');
const timeout = util.promisify(setTimeout);
timeout(1000).then(() => console.log('1s'));

async function copy() {
  try {
    const content = await fs.promises.readFile(packagePath, { encoding: 'utf-8' });
    await fs.promises.writeFile(packageCopyPath, content);
    console.log('DONE');
  } catch (err) {
    console.log(err.message);
  }
}

copy();

// Stage 3 Top level await (TypeScript 3.8+)
// try {
//   const content = await fs.promises.readFile(packagePath, { encoding: 'utf-8' });
//   await fs.promises.writeFile(packageCopyPath, content);
//   console.log('DONE');
// } catch (err) {
//   console.log(err.message);
// }
