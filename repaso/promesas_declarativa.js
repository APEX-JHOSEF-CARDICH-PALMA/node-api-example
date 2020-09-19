/* imperativa, indicaremos el camino del flujo de los datos
declarativ: Se encarga de detallar la logica del programa, pero no se enfoca en como se hacen las cosas 
por debajo*/

const { identity } = require("lodash");

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


/**
 * Las promesas reci ben una funcion, que  a su vez
 * recbe dos parametros, el cual uno indica el valor correcto de la 
 * ejecucion  y otro el caso de fallo
 */

// Promises: EL then y el catch estan asociados a cada parametro resolve y reject
let p =
  new Promise(function (resolve, reject) {
    let suma = 2 + 20;
    if (suma === 8) {
      resolve("Correcto!");
    } else {
      reject("Error!");
    }
  });
p.then(function (mensaje) {
  console.log(mensaje);
}).catch(function (error) {
  console.log(error);
});
// LLamadas encadenadas de promesas 
function mostrarPhone(mensaje) {
  return new Promise(function (resolve, reject) {
    if (mensaje) {
      resolve("Obtuvistes es un + mensaje.brand");
    } else {
      reject("Error");
    }
  });
}

function miPromesa() {
  return new Promise(function (resolve, reject) {
    let isHomeworkDone = true;
    if (isHomeworkDone === true) {
      let phone = {
        color: "negro",
        brand: "iPhone"
      }
      resolve(phone);
    } else {
      reject("No obtuvistes un iPhone");
    }
  });
}

miPromesa().then(function (mensaje) {
  return mostrarPhone(mensaje);
}).then(function (respuesta) {
  console.log(respuesta);
}).catch(function (error) {
  console.log(error);
});

// Callbacks: Funciones que reciben como parametro otras funciones
function function1(fn) {
  setTimeout(function () {
    console.log("mensaje 1");
    fn();
  }, 1000);
}
function function2() {
  console.log("mensaje 2");
}
function1(function2);


/* Async & Await  tambien son mecanismos para los que podremos usar
para poder gestionar promesas por debajo tambien
*/


const getDatos = () => {
  return new Promise((resolve, reject) => {
    if (datos.length === 0) {
      setTimeout(() => {
        resolve(datos);
      }, 1500);
    } else { reject(new Error('Ha habido un error')); }

  });
}
/**Si queremos usar Awaiy o Async tenemos que hacerlos dentro de una funcion */

async function fetchingData() {
  try {
    const datosFeteched = await getDatos();
    console.log(datosFeteched)
  } catch (err) {
    console.log(err.message);
  }
}


//Funciones de alto orden, funciones que retornan funciones
function makeAdjectifier(adjective) {
  return function (string) {
    return adjective + " " + string;
  };
}
let coolifier = makeAdjectifier('cool');
coolifier('video');
// "cool video