// Funciones reduce
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const suma = (ns) => {
  let acumulado = 0;
  for (let i = 0; i < ns.length; i++) {
    acumulado += ns[i];
  }
  return acumulado;
};

var data = require('./data.json'); //(with path)

console.log('- Suma de ID con reduce');

// reduce
const reducedArray = data
  .map((x) => x.id)
  .reduce((acumulador, el) => acumulador + el, 0);

console.log(reducedArray);
