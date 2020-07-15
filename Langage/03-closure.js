globalThis.porteeGlobale = 'porteeGlobale';
const porteeModule = 'porteeModule';

function externe() {
  const porteeClosure = 'porteeClosure'
  function interne() {
    const porteeLocale = 'porteeLocale';
    console.log(porteeLocale);
    console.log(porteeClosure);
    console.log(porteeModule);
    console.log(porteeGlobale);
  }
  interne();
}

externe();
// interne n'existe pas
