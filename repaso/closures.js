/* Un closure se crea  cuando se ejecuta una funcion
A las variables a las que puede acceder esta funcion, como a las que esttan fuer o 
dentro de la funcion se pueden crear composiciones
de funciones en las que se puede pasar un parametro antes y otro despues
*/

/*const x = 'Fluffy';
const f = () => {
  const y = 'kins';
  console.log(x, y);
};
f();
*/

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

require('isomorphic-fetch');

const crudder = (dominio) => (recurso) => {
  const url = `${dominio}/${recurso}`;
  return {
    create: (x) =>
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(x),
      }).then((x) => x.json()),
    get: () => fetch(url).then((x) => x.json()),
  };
};

const Base = crudder('https://jsonplaceholder.typicode.com');
const Todos = Base('todos');
const Users = Base('users');

Todos.get().then((x) => console.log(x[0]));

//Otra manera de devolver el valor de los datos que se traen de la API
const valorRecursoAPI = () =>
  Users.get().then((x) => {
    return x;
  });

const valor = await valorRecursoAPI();
// Entonces este espera a que la promesa  se cumpla
//No me parece tan buena idea, que pasa si la promesa falla ??
console.log(valor);
