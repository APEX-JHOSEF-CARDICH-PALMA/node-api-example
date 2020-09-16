import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
//Importamos rutas
import routes from '../routes/index.route.js';

//----- Server settings---------
//Puertos
const app = express();
app.set('port', process.env.APP_PORT || 3000);
app.set('host', process.env.APP_HOST || 'localhost');

/**
 * Directorio vistas:
 * Usamos el metodo join para evitar problemas
 * de directorios en los diferentes SSOO.
 */
//app.set('views', path.join(__dirname, 'views'));
app.set('views', './views');

/**
 * Usaremos un motor de plantillas ejs
 * pero hay mas (handlBars)
 */
app.set('view engine', 'ejs');

//Uso de las rutas
app.use('/', routes);

//Capturar los datos desde html
app.use(express.urlencoded({ extended: false }));

/*----- middleware---------
Funciones que se ejecutan antes de nuestras funcionalidades*/
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(express.static('/backend/public'));

export default app;
