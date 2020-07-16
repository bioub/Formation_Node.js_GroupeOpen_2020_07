'use strict';

const Random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');

class Jeu {
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;

    // Object.assign(this, { min: 0, max: 100 }, options);

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.entierAlea = Random.getInt(min, max);
    this.essais = [];
  }
  loop() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')}`);
    }
    this._rl.question("Quel est l'entier ? ", (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : Il faut saisir un entier');
        return this.loop();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.loop();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.loop();
      } else {
        console.log('Gagné');
        this._rl.close();
      }
    });
  }
}

const game = new Jeu();
game.loop();
