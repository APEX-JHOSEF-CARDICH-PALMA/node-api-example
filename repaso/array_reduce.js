// Funciones reduce
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

var data = require('./data.json'); //(with path)

const mascotas = [
  { nombre: 'pucho', edad: 12, tipo: 'perro' },
  { nombre: 'caracho', edad: 17, tipo: 'cangrejo' },
  { nombre: 'zorro', edad: 15, tipo: 'zorro' },
  { nombre: 'bob', edad: 14, tipo: 'perro' },
  { nombre: 'pucho', edad: 14, tipo: 'gata' },
];
const suma = (ns) => {
  let acumulado = 0;
  for (let i = 0; i < ns.length; i++) {
    acumulado += ns[i];
  }
  return acumulado;
};

console.log('- Suma de ID con reduce');

// reduce para poder hacerla suma
const reducedArray = data
  .map((x) => x.id)
  .reduce((acumulador, el) => acumulador + el, 0);

console.log(reducedArray);

/* Si queremos hacer buscar 
un elemento de dentro del arreglo
se puede usar el metodo find, pero 
este se ejecutara por cada elemento del arreglo,
mejor es indexar por performance
 */
const indexed = mascotas.reduce(
  (acc, el) => ({
    ...acc,
    [el.nombre]: el,
  }),
  {}
);
console.log(indexed);
// Asi podremos buscar mas rapidamente, aunque este devuelve solo el ultimo elemento encontrado
console.log(indexed['pucho']);
/*
 Tambien si quremos un arreglo  plano podremos
  */

const anidado = [1, [2, 3], 4, [5]];
/* reduce recibe el callback que es nuestra funcion reducer
 la primera parte de la funcion es la operacion y la segunda parte es el estado inicial o valo
 inicial del arraelgo reducido
 La operacion recibe el acumulador y el elemto que se esta iterando */
const plano = anidado.reduce((acc, el) => acc.concat(el), []);
console.log(plano);
