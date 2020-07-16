function hello(name) {
  return 'Hello ' + name;
}

// Arrow
const random = () => Math.random();
const hello = (name) => 'Hello ' + name;
const sum = (a, b) => a + b;

const coordsFactory = (x, y) => ({ x, y });

const pileOuFace = () => {
  if (Math.random() > 0.5) {
    return 'pile';
  } else {
    return 'face';
  }
};


// Destructuring Array
// const nbs = [1, 2, 3, 4];
// const un = nbs[0];
// const deux = nbs[1];
// const trois = nbs[2];
// const quatre = nbs[3];
//    [ 1,    2,     3,      4]
const [un, deux, trois, quatre, cinq = 5, ...autres] = [1, 2, 3, 4];

// const tmp = 'Romain Bohdanowicz'.split(' ');
// const prenom = tmp[0];
// const nom = tmp[1];
const [prenom, nom] = 'Romain Bohdanowicz'.split(' ');

// Destructuring Object
//    {x: 1, y: 2}
const { x = 1, y = 2, ...others } = {x: 1, y: 2};

