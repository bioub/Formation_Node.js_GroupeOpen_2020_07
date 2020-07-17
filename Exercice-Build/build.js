const fs = require("fs-extra");
const path = require("path");
const md5 = require("md5");
const Terser = require("terser");
const argv = require('minimist')(process.argv.slice(2));

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function rmAndMkdir(dirPath) {
  await fs.remove(dirPath);
  await fs.mkdir(dirPath);
}

async function concatFiles(sourceFilePaths, destPath) {
  /*
  [
    '/Users/romain/Desktop/Formation/Exercice-Build/src/js/horloge.js',
    '/Users/romain/Desktop/Formation/Exercice-Build/src/js/index.js'
  ]
  */
  // await Promise.all([
  //   fs.readFile('/Users/romain/Desktop/Formation/Exercice-Build/src/js/horloge.js'),
  //   fs.readFile('/Users/romain/Desktop/Formation/Exercice-Build/src/js/horloge.js'),
  //
  const buffers = await Promise.all(
    sourceFilePaths.map((filePath) => fs.readFile(filePath))
  );

  let buffer = Buffer.concat(buffers);

  if (argv.minify) {
    let content = buffer.toString('utf-8');

    const { error, code } = Terser.minify(content)

    if (error) {
      throw new Error('Minify error : ' + error.message);
    }

    buffer = Buffer.from(code);
  }

  const hash = md5(buffer);

  if (argv.hash) {
    destPath = destPath.replace('app.js', `app.${hash}.js`);
  }

  await fs.writeFile(destPath, buffer);

  return hash;
}

async function buildHtml(hash) {
  let content = await fs.readFile(indexHtmlPath, { encoding: "utf-8" });

  // content = content
  //   .replace(
  //     '<script src="./js/horloge.js"></script>',
  //     '<script src="./app.js"></script>'
  //   )
  //   .replace('<script src="./js/index.js"></script>', "");

  const fileName = (argv.hash) ? `app.${hash}.js` : 'app.js';

  content = content
    .replace(
      /<script.*<\/script>/s,
      `<script src="${fileName}"></script>`
    );

  await fs.writeFile(indexHtmlDistPath, content);
}

(async () => {
  await rmAndMkdir(distPath);
  console.log(distPath + " created");
  const hash = await concatFiles([horlogeJsPath, indexJsPath], appJsDistPath);
  console.log("js built");
  await buildHtml(hash);
  console.log("html built");
})();
