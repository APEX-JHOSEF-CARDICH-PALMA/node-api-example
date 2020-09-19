/**
 * Vamos a definir que son los modulos:
 * EC6:
 * Export = Haz que este codigo este disponible para otras partes, 
 * para usar el export, y asi podemos dividirlos en modulos, un modulo no es 
 * mas que un trozo de codigo js.
 * 
 * a la hora de importar, existen dos definiciones en el archivo origen:
 * caso a) export function saymMyname: En este caso  hay que mportar conel nombre de
 *  la funcion, hay que especificar (son named exports)
 * caso b) export default: importacion solo por defecto,podemos usar cualquier nombre 
 * en la importacion, ya que solo buscara el default. Solamente puede haber un default por 
 * archivo.
 */

// Caso a
import { sayName, sayAnimal, miFuncUno, funcionPerrona } from './b_modules_lesson';
sayName('Sam');
//Hello Sam
sayAnimal('Giraffe');
//What animal? Giraffe
//------------------------------------
// Caso b 
import whatsYourFlava from './b_modules_lesson';
whatsYourFlava('grapes');
//I'm liking grapes


//------------------------------------
/**Podemos importar toods exports  como un objeto*/
import * as AllMyNamedComponents from './b_modules_lesson';

//------------------------------------
//------------------------------------

// Pero usando requires, podemos hacer los iports de ciertas funcionalodidades asi
var square = require('./b_modules_lesson').square;
var diag = require('./b_modules_lesson').diag;
var add = require('./b_modules_lesson').add;
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
