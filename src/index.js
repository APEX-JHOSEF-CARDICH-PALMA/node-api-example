//Importamos configuracion de Express
import app from './config/express.js';

//Importamos rutas
import routes from './routes/index.route.js';

import mongoose from 'mongoose';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

require('dotenv').config();

mongoose
  .connect('mongodb://mongo/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('Db is connected to', db.connection.host))
  .catch((err) =>
    console.log('Error en la conexion de la base de datos: ', err)
  );

app.use('/api', routes);

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});
