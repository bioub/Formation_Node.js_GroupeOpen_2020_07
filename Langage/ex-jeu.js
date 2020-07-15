function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function loop() {
  if (essais.length) {
    console.log(`Vous avez déjà joué : ${essais.join(' - ')}`);
  }
  rl.question("Quel est l'entier ? ", (answer) => {
    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : Il faut saisir un entier');
      return loop();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      loop();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      loop();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

const entierAlea = getRandomInt(0, 100);
const essais = [];
loop();

// pile d'appel
// ^
// |                            question                      question
// |question               lg - loop                     lg - loop
// |loop      ⟳            =>              ⟳            =>
// +------------------------ENTREE-----------------------ENTREE------------> temps
//
