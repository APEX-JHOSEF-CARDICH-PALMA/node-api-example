const numeros = [1, 2, 3, 4, 5, 6, 8, 9, 10];

const mascotas = [
  { nombre: 'pucho', edad: 12, tipo: 'perro' },
  { nombre: 'caracho', edad: 17, tipo: 'cangrejo' },
  { nombre: 'zorro', edad: 15, tipo: 'zorro' },
  { nombre: 'bob', edad: 14, tipo: 'perro' },
];

//--------------------------------------
// filter
//--------------------------------------
//Genera nuevo arreglo con los numeros que cumplen dicha condicion
const numerosFiltrados = numeros.filter((x) => x < 5);
//console.log(numeros + numerosFiltrados);

const perros = mascotas.filter((x) => x.raza == 'perro');

//console.log(mascotas, perros);

const suma = (ns) => {
  let acumulado = 0;
  for (let i = 0; i < ns.length; i++) {
    acumulado += ns[i];
  }
  return acumulado;
};

//--------------------------------------
// Map 1 - Maper un JSON de variable
//--------------------------------------
const strJSON =
  '[{"concepto":"mac","importe":1000},{"concepto":"android","importe":500}]';

//De String  a objeto JSon
const obJSON = JSON.parse(strJSON);
//console.log(obJSON.map((x) => x.concepto));

// JSON.parse(str).. para pasar de JSON a Strig

//--------------------------------------
// Map 2 - Lee un JSON file
//--------------------------------------

// Funcion AJAX - Solo ejecutable desde el navegador i guess
function getDataJsonFile() {
  console.log('getDataJsonFile');
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'data.json', true);
  xhttp.send();

  xhttp.onreadystatechange() = function () {
    if (this.readyState == 4 && this.status == 400) {
      console.log(this.responseText);
    }
  };
}

// Usando readFileSync

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

const getDataJson = function () {
  let rawData = fs.readFileSync('data.json');
  let data = JSON.parse(rawData);
  console.log(data);
};

//getDataJson();

// Usando require, por lo visto ya te devuelve el objeto json

var data = require('./data.json'); //(with path)

//Ahora podemos mapear las cosas que hemos leido, en este caso sacamos los nombres
console.log('- campo: first_name');
console.log(data.map((z) => z.first_name));

console.log('- Suma de ID');
console.log(suma(data.map((z) => z.id)));

//--------------------------------------
// Map 3 - otras operaciones
//--------------------------------------

const multiplicados = numeros.map((x) => x * 2);
//console.log(multiplicados);

const parejas = numeros.map((x) => [x, x]);
//console.log(parejas);

const sumaEdadMascostas = mascotas.map((x) => x.edad);
//console.log(sumaEdadMascostas);
