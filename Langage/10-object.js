// JavaScript offre de nombreux objets déjà existants

// définis au niveau du langage
console.log(typeof Math); // objet
console.log(typeof JSON); // objet
console.log(typeof String); // function
console.log(typeof Array); // function

// définis au niveau du navigateur
console.log(typeof document); // objet
console.log(typeof navigator); // objet
console.log(typeof window); // objet

// définis au niveau de Node.js
console.log(typeof process); // objet
console.log(typeof global); // objet

// définis au niveau du navigateur et Node
console.log(typeof console); // objet

// Les objets en JavaScript sont extensibles
// (on peut en modifier le contenu)

console.log(Math.sum); // undefined

// Ajouter une clé/valeur
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3

// Modifier une clé/valeur
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

// Supprimer une clé/valeur
delete Math.sum;
console.log(Math.sum); // undefined

// Pour créer des objets, 2 syntaxes
// Object literal : {}
// constructor: new

// Object literal
const coords1 = {
  x: 1,
  y: 2,
  // getX: function() {
  //   return this.x;
  // }
};

coords1.z = 3;

const coords2 = {
  x: 3,
  y: 4,
  // getX: function() {
  //   return this.x;
  // }
};

const MyMath = {
  sum: function (a, b) {
    return a + b;
  },
};

// constructor
function Coords(x) {
  console.log('Coords call');
  console.log(arguments);
  console.log(this);

  // if (x > 20) {
  this.x = x;
  // }
  // this.getX = function() {
  //   return this.x;
  // };
}

Coords.prototype.getX = function () {
  return this.x;
};

const coordsA = new Coords(4);
const coordsB = new Coords(5);
console.log(typeof Coords); // function
console.log(typeof coordsA); // object

console.log(coordsA.x); // 4
console.log(coordsA.getX()); // 4
