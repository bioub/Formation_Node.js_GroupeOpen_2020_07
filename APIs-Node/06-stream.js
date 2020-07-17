const fs = require('fs');
const { createGzip } = require('zlib');


const readStream = fs.createReadStream('package.json');
const writeStream = fs.createWriteStream('package.json.copy');

// readStream.once('open', (fd) => {
//   console.log('open');
//   readStream.on('data', (chunk) => {
//     console.log('data', chunk.toString('utf-8'));
//   })
// });

readStream.pipe(writeStream);

// cat package.json | write package.json.copy

// ReadStream -> lecture (methode read)
// WriteStream -> ecriture (methode write)
// DuplexStream -> lecture/ecriture (methodes read et write)
// TransformStream -> lecture/ecriture avec transforme entre les 2 (methodes read et write)


// cat package.json | gzip | write package.json.zip
readStream.pipe(createGzip()).pipe(fs.createWriteStream('package.json.zip'));
