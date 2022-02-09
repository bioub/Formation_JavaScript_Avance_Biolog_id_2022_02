import { createInterface } from 'readline';
import { getRandomIntInclusive } from './random.js';

function Jeu(options) {
  const min = options.min ?? 0;
  const max = options.max ?? 100;

  this._rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
  });
  this._entierAlea = getRandomIntInclusive(min, max);
  this._essais = [];
}

Jeu.prototype.jouer = function () {

  if (this._essais.length) {
    console.log('Vous avez déjà joué : ' + this._essais.join(' - '));
  }

  this._rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Le nombre saisi : ' + answer);

    const entierSaisi = parseInt(answer, 10);

    if (isNaN(entierSaisi)) {
      console.log(`Error : ${answer} is not a number`)
      return this.jouer();
    }

    this._essais.push(entierSaisi);

    if (entierSaisi < this._entierAlea) {
      console.log('Trop petit');
      this.jouer();
    } else if (entierSaisi > this._entierAlea) {
      console.log('Trop grand');
      this.jouer();
    } else {
      console.log('Gagné');
      this._rl.close();
    }
  });
}

const game = new Jeu({
  max: 10
});
game.jouer();
