// object literal
const coords = {
  x: 1,
  y: 2,
};

// object extensibility
coords.z = 3;

// Eviter d'étendre les objets normés / ou d'une lib externe
// Math.sum = (a, b) => a + b;

console.log(coords.x);
console.log(coords['x']);
const key = 'x';
console.log(coords[key]);

// Boucler sur les clés
for (const key in coords) {
  if (coords.hasOwnProperty(key)) { // boucler que sur les propriétés
    const value = coords[key];
    console.log(key, value);
  }
}

function contactFactory(prenom) {
  return {
    prenom,
    hello() {
      return 'Hello ' + this.prenom;
    }
  }
}

const c1 = contactFactory('Jean');
const c2 = contactFactory('Jean');

console.log(c1.prenom === c2.prenom); // true
console.log(c1.hello() === c2.hello()); // true
console.log(c1.hello === c2.hello); // false

// constructor function
// function Contact(prenom) {
//   // pseudo variable
//   // créées à l'appel de la fonction
//   // console.log(this); // référence interne à l'objet
//   // console.log(arguments); // les arguments passés à la fonction

//   this.prenom = prenom;
// this.hello = function() {

// }
// }

// Contact.prototype.hello = function() {
//   return 'Hello ' + this.prenom;
// };

// ES2015 mot class ( constructor function masquée )
class Contact {
  constructor(prenom) {
    // pseudo variable
    // créées à l'appel de la fonction
    // console.log(this); // référence interne à l'objet
    // console.log(arguments); // les arguments passés à la fonction
    // if (prenom.length > 4) {
      this.prenom = prenom;
    // }
  }
  hello() {
    return 'Hello ' + this.prenom;
  }
}

const romain = new Contact('Romain');
const eric = new Contact('Eric');

console.log(romain.hello === eric.hello); // true

console.log(typeof romain); // object
console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function
console.log(romain.prenom);
console.log(romain.hello());

console.log(romain.prenom !== undefined); // true
console.log(romain.hello !== undefined); // true

console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
