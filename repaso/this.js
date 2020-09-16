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
para que asi este pueda referenciarlo*/

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
