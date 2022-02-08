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
  return interne;
}

const interneFromExterne = externe();
interneFromExterne();
// pile d'appel
// ^
// |
// |
// |externe - interne
// +-----------------------> temps
