//Creamos el servidor
const express = require('express');
const app = express();

//configuramos las rutas -->  '/'
app.get('/',function(req,res){
res.send('<h1>Hola mundo con Express y Node.js</h1>');
res.end();
});

/** Lo mismo de antes usando funciones flecha..
app.get('/',(req,res) => {
    res.json({'itworks':'yes'});
    res.end();
    });
 */

//configuración del servidor
app.listen(3000,function(){
    console.log('Servidor con express corriendo en el puerto 3000');
})