import { createInterface } from 'readline';

const rl = createInterface(process.stdin, process.stdout);

rl.question('Quel est le nombre ? ', (answer) => {
  console.log('Le nombre saisi : ' + answer);

  // si on trouve le nombre, on quitte
  rl.close(); // arrête d'écouter le stream
});
