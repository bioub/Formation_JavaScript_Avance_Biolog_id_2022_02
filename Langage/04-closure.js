globalThis.maVariableGlobale = 'maVariableGlobale';
const enDebutDeFichier = 'enDebutDeFichier';

function externe() {
  const dansExterne = 'dansExterne';
  function interne() {
    const dansInterne = 'dansInterne';
    console.log(dansInterne);
    console.log(dansExterne);
    console.log(enDebutDeFichier);
    console.log(maVariableGlobale);
  }
  interne();
}

externe();

// pile d'appel
// ^
// |
// |interne
// |externe
// +-----------------------> temps
