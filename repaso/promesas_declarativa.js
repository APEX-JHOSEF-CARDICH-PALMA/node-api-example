/* imperativa, indicaremos el camino del flujo de los datos
declarativ: Se encarga de detallar la logica del programa, pero no se enfoca en como se hacen las cosas 
por debajo*/

//Promesas
/*
Son un obejeto que representan un valor que se pueden resolver eventualmente
o se pueden resolver en un futuro, y al cual nosotros vamos a poder accerder eventualmete a el.

Async y Await son metodos mas antiguos, pero las promesas son mas componibles, lo cual va a permitir que 
podamos reutilizar mas y mas nuestro codigo.

Las promesas se pueden resolver inmediatamente o se pueden resolver eventualmente en un futuro, de la misma manera
pueden fallar.

Se pueden encadenar varias promesas, esto quiere decirt que el valor de una promesa puede tener otro promesa.

Estas se encuentran de manera nativa en el navegador y en Node.js
*/

// Ejemplos:

const p1 = Promise.resolve(1);
console.log(p1);
/* En el ejemplo anterior, no podremos acceder al valor de la promesa, si no hacemos
uso del metodo then. La promesa es una especie de contenedor que tendra un valor a futuro,
en este caso el valor se resuelve de manera inmediata.
 */
//Acceso a los valores de la promesa
p1.then((x) => console.log(x));

//Podemos componer con then para hacer una tuberia

p1.then((x) => x + 5).then((x) => console.log(x));

//Podemos devolver una promesa dentro del encadenamiento
p1.then((x) => x + 5)
  .then((x) => Promise.resolve(x + 5))
  .then((x) => console.log(x));

/* Que pasa cuando una promesa falla:
En este caso, se ejecuta hasta el 3 then, despues el catch
es decir que no se va a poder ejecutar los demas then, solo podremos manejar 
el error en  la parte del catch*/
p1.then((x) => x + 5)
  .then((x) => Promise.resolve(x + 5))
  .then((x) => Promise.reject('Error! algo  salio mal'))
  .then((x) => console.log('Esto no se va a llamar'))
  .catch((e) => console.log(e));

/*Promesas que se resuelven a futuro:
las promesas tambien se pueden comportar como clases*/

const delayed = (x) =>
  new Promise((resolve, reject) => setTimeout(() => res(x), 900));
