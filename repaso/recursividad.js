// trampolines

const trampoline = (fn) => (...args) => {
  let result = fn(...args);
  while (typeof result === 'function') {
    result = result();
  }
  return result;
};

// Funcion recursiva normal
const suma = (number, sum = 0) => {
  number === 0 ? sum : suma(number - 1, sum + number); // si el numero es igual a 0 entonces retornmoa sum
};
//const r = suma(10000); // Para esta llamda tendremos un maximum call stack exceeded
//console.log(r);

/* En este caso podremos implementar un fuincion 
trampolin para poder llamar a la funcion multiples veces.
La condicion de para de dichja fucnion es cuando la funcion a ser ejecutada devuelve
un valor que no es onjeto funcion 'suma(number - 1, sum + number)'. Entonces se parará cuando la funcion devuelva
sum */

const sumat = (number, sum = 0) => {
  number === 0 ? sum : () => sumat(number - 1, sum + number); // si el numero es igual a 0 entonces retornmoa sum
};
//const r = suma(10000); // Para esta llamda tendremos un maximum call stack exceeded

const tsuma = trampoline(sumat);
const r = tsuma(5);
console.log(r);
