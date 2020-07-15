const prenoms = ['Romain', 'Jean', 'Eric'];

// Paradigme impératif
for (const prenom of prenoms) {
  if (prenom.length === 4) {
    const prenom4Lettre = prenom;
    const prenom4LettreMaj = prenom4Lettre.toLocaleUpperCase();
    console.log(prenom4LettreMaj);
  }
}

// Paradigme fonctionnel
prenoms.filter((prenom) => prenom.length === 4)
       .map((prenom4Lettre) => prenom4Lettre.toLocaleUpperCase())
       .forEach((prenom4LettreMaj) => console.log(prenom4LettreMaj));

console.log('FIN');

// pile d'appel
// ^
// |               up   up   lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - lg
// +-------------------------------------------------> temps
//                           JEAN ERIC FIN


// function hello(name = '') {
//   return `Hello ${name} !`;
// }

// ES5
// prenoms.forEach((prenom, i) => {
//   console.log('cb forEach');
//   console.log(prenom, i);
// });
