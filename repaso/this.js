/* Tenemos ciertos incovenientes con this:
 Cuando hacemos referencia a this dentro de una funcion que es parte de un objeto, como si fuese un atributo mas 
 entonces podremos referenciar a dicho metodo con this.
 Sin embargo, cuando dentro del propio objeto tenemos un funcion regular (una funcion que tenga la palabra
    "function")
En el siguiente ejeplo s epuede ver
    */

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    });
  },
};
/* Si ejecutamos el codigo anterior tendremos un error
en el que se nos indica que this.title, dentro de la funcion
que intenta imprimir el titulo, no esta definido. Esto es debido a que
la funcion esta buscando el valor de la variable en el ambito mas general, fuera dell callback
, para soluciionar esto, tendriamos que pasarle el objeto video al callback 
para que asi este pueda referenciarlo, o quiza, si no necesitamos parametros podremos llamar 
con una funcio que no recibe parametros*/

const videos2 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

videos2.showTags();
/**
 * For fns inside Objects: 'this' refers to the object calling the function.
For fns not called by objects - Eg call back functions -    'this' refers to the global object.
For fns defined using arrow functions - 'this' simple refers to the object that is executing the 
arrow function - Irrespective of object's scope. Meaning:  if the arrow function is called from a 
global scope? 'this' will refer to the global object. If the arrow function is called with in a function 
which belongs to an object?'this' will refer to the calling function's scope and in this case the object itself.
 */
