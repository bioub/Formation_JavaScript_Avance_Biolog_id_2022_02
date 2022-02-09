import { createInterface } from 'readline';
import { getRandomIntInclusive } from './random.js';

// const rl = createInterface(process.stdin, process.stdout, null, true);
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});
const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];

function jouer() {

  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Le nombre saisi : ' + answer);

    const entierSaisi = parseInt(answer, 10);

    if (isNaN(entierAlea)) {
      console.log(`Error : ${answer} is not a number`)
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

jouer();
