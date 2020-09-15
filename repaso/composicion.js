import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const _ = require('lodash');

//Te cambia la primera letra de cada palabra
const users = [{ id: 1, nombre: 'jhosef', apellido: 'cardich' }];
/*

const getNombreCompleto = (_users) => {
  const primero = _users[0];
  const capitalizados = {
    nombre: _.upperFirst(primero.nombre),
    apellido: _.upperFirst(primero.apellido),
  };
  return `${capitalizados.nombre} ${capitalizados.apellido}`;
};
const x = getNombreCompleto(users);

*/
//Composicion de funciones, llamando funciones
//Modificacion de un elemento
const primerElemmento = (x) => x[0];

// Modificacion de varios elementos
const capitalizaNombreyApellido = (x) => ({
  nombre: _.upperFirst(x.nombre),
  apellido: _.upperFirst(x.apellido),
});

const generaCadenaNombre = (x) => `${x.nombre} ${x.apellido}`;

//Ojo al return
const getNombreCompleto = (_users) => {
  const primero = primerElemmento(_users);
  const capitalizados = capitalizaNombreyApellido(primero);
  return generaCadenaNombre(capitalizados);
};

console.log(getNombreCompleto(users));
const x = getNombreCompleto(users);
console.log(x);
