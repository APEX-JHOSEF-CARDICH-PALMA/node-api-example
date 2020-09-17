import mongoose from ('mongoose');
/**
 * Configuracion del esquema de la base de datos
 */

const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    title: String,
    description: String, phone: String

})

/**
 * Pasamos nuestro schema a mongo db para poder empezar a guardar datos
 */

mongoose.model('tasks', TaskSchema);
