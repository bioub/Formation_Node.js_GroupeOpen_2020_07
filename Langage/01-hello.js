const prenoms = ['Romain', 'Jean', 'Eric'];

function hello(name = '') {
  return `Hello ${name} !`;
}

for (const prenom of prenoms) {
  console.log(hello(prenom));
}

const user = {
  name: ''
}

function helloObj(obj = {}) {
  // if (obj.name === undefined) {
  //   obj.name = '';
  // }
  // obj.name = obj.name || 'Jean'; // obj.name soit falsy (équivalent à false: false, 0, '', undefined, null)
  obj.name = obj.name ?? 'Jean'; // obj.name soit nullish (équivalent à null : undefined, null)
  return `Hello ${obj.name} !`;
}

console.log(helloObj());
