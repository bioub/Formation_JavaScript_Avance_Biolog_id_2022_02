import { hello } from './01-hello.js';

const names = ['Romain', 'Grégoire'];
// names.push('Jean'); // ok (const)
// names = ['Romain', 'Grégoire', 'Jean']; // error (const)

for (const n of names) {
  console.log(hello(n));
}
