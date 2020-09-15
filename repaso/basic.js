//alert('This is an alert');

var nombre = 'Jhos';
var altura = 190;

//document.write(nombre);
/*
var datos = document.getElementById('datos');

//Template string
datos.innerHTML = `
<h1>Soy un contenedor de datos</h1>
<h2> Mi nombre es: ${nombre}</h2>
`;
*/
// El if por defecto lo que hace es machacar lo que hay dentro del div "datos"
// pero podemos agregar dicha li na usando el operador +=
if (altura >= 190) {
  datos.innerHTML += `
<h1>Eres una persona Alta</h1>
`;
} else {
  datos.innerHTML += `
<h1>Eres una persona bajita</h1>
`;
}

//for

for (var i = 0; i <= 10; i++) {
  datos.innerHTML += '<h2> El valor de la variable i es:' + i;
}

function MuestraMiNombre(nombre) {
  var datos = document.getElementById('datos');

  //Template string
  datos.innerHTML = `
<h1>Soy un contenedor de datos</h1>
<h2> Mi nombre es: ${nombre}</h2>
`;
}
MuestraMiNombre('Juanito');

// Listado de arrays
var listado_nombres = ['juan', 'Pedro', 'mario'];

document.write('<h2>Listado de Nombres: </h2>');

for (i = 0; i < listado_nombres.length; i++) {
  document.write(listado_nombres[i] + '<br/>');
}
//funcion callback
document.write('<h2>Listado de Nombres de Alumnas: </h2>');

var listado = ['Rossana', 'Junita', 'maria'];

listado.forEach((names) => {
  document.write(names + '<br/>');
});

//--------------------------------------
document.write('<h2>Array Filter: </h2>');

const numeros = [1, 2, 3, 4, 5, 6, 8, 9, 10];

const mascotas = [
  { nombre: 'pucho', edad: 12, raza: 'perro' },
  { nombre: 'caracho', edad: 17, raza: 'cangrejo' },
  { nombre: 'zorro', edad: 15, raza: 'zorro' },
  { nombre: 'bob', edad: 14, raza: 'perro' },
];
//Genera nuevo arreglo con los numeros que cumplen dicha condicion
const numerosFiltrados = numeros.filter((x) => x < 5);
document.write(numeros + ' <br/>' + numerosFiltrados);

const perros = (mascotas.filter = mascotas.filter((x) => x.raza) == 'perro');

document.write(mascotas + ' <br/>' + perros);

//--------------------------------------
