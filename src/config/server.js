import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

//Importamos rutas
import routes from '../routes/index.route.js';

//----- Server settings---------
//Puertos
const app = express();

app.set('port', process.env.APP_PORT || 3000);
app.set('host', process.env.APP_HOST || 'localhost');



/*----- middleware---------
Funciones que se ejecutan antes de nuestras funcionalidades*/
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

/**
 * ROUTES
 * Always add your routes after the middleware functions, like in the above code.
 */
app.use('/api', routes);

export default app;
