const nomComplet = 'Romain Bohdanowicz';
// const tmp = nomComplet.split(' ');
// const firstName = tmp[0];
// const lastName = tmp[1];

//    ['Romain' , 'Bohda' ]
const [firstName, lastName] = nomComplet.split(' ');
const [prenom, nom = 'Bohdanowicz'] = 'Romain'.split(' ');

console.log(firstName); // Romain
console.log(lastName); // Bohdanowicz

// REST Param
// conversion syntaxique
// liste de valeur 3, 4, 5, 6
// ->
// tableau [3, 4, 5, 6]
const [un, deux, ...troisEtPlus] = [1, 2, 3, 4, 5, 6];

// SPREAD Operator
// conversion syntaxique
// tableau [3, 4, 5, 6]
// ->
// liste de valeur 3, 4, 5, 6
const nbs = [3, 4, 5, 6];
const newNbs = [1, 2, ...nbs]; // [1, 2, 3, 4, 5, 6]

const coords = { x: 10, y: 20 };

//    { x: 10  , y: 20   }
const { x: varX, y: varY, z: varZ = 0 } = coords;
console.log(varX); // 10
console.log(varY); // 20

const a = 'a';
const b = 'b';

// Shorthand property
// const obj = { a: a, b: b };
const obj = { a, b };

// REST Object
const { z = 0, ...coords2d } = coords;
console.log(coords2d); // { x: 10, y: 20 };

// SPREAD Object
const newCoords = { ...coords, z: 30 };

Object.defineProperty(coords, 'd', {
  value: 'd',
});

// Cloner
const cloneArray = [...nbs];
const cloneObject = { ...coords };
console.log(coords);
