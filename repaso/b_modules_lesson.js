
export function sayName(name) {
    console.log(`Hello ${name}`);
}
export function sayAnimal(animal) {
    console.log(`What animal? ${animal}`);
}
// Default export
export default function whatsYourFlava(flava) {
    console.log(`I'm liking ${flava}?`);
}

/**
 * Aunque es redundante, podemos definir los exports listandolos
 * y dandoles alias
 */

export { miFuncUno, miFuncdos as funcionPerrona }

const miFuncUno = () => { };
const miFuncdos = () => { };

//------------------------------------
//------------------------------------
// CommonJs Style 

var sqrt = Math.sqrt;
function square(x) {
    return x * x;
}
function diag(x, y) {
    return sqrt(square(x) + square(y));
}
function add(x, y) {
    return x + y;
}
module.exports = {
    sqrt: sqrt,
    square: square,
    diag: diag,
    add: add,
};