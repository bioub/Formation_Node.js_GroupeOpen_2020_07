'use strict';

const readline = require('readline');
const Random = require('@formation.tech/random');

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

module.exports = Jeu;
