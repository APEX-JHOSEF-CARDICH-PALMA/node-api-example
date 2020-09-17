//Para usar require, hay que importar esto
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config();

//Importamos configuracion de del servidor
import app from './config/server.js';

// BD Mongo
import mongoose from 'mongoose';

/** DB connection */
mongoose
  .connect('mongodb://localhost/data-base', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('Mongo is connected to', db.connection.host))
  .catch((err) =>
    console.log('Error en la conexion de la base de datos: ', err)
  );

/** Server start */
app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});
