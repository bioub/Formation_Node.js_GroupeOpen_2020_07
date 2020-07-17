// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // appel du callback du then
//       resolve();
//     }, delayMs);
//   });
// }

// timeout(1000).then(() => console.log('1s'));

function asyncLetter(letter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // appel du callback du then
      resolve(letter);
    }, Math.floor(Math.random() * 5000));
  });
}

// asyncLetter('A').then((letter) => console.log(letter));
// asyncLetter('B').then((letter) => console.log(letter));
// asyncLetter('C').then((letter) => console.log(letter));
// asyncLetter('D').then((letter) => console.log(letter));

console.time('letters');
Promise.all([
  asyncLetter('A'),
  asyncLetter('B'),
  asyncLetter('C'),
  asyncLetter('D'),
]).then((letters) => {
  console.log(letters);
  console.timeEnd('letters');
});
