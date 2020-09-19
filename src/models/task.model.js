import mongoose from 'mongoose';
const { Schema } = mongoose;
/**
 * Configuracion del esquema de la base de datos
 */


const taskSchema = new Schema({
    title: String,
    description: String,
    phone: String
});

/**
 * Pasamos nuestro schema a mongo db para poder empezar a guardar datos
 */
//Exportamos el schema si queramos usarlo para hacer otro modelo
const TaskModel = mongoose.model('Task', taskSchema);
export default TaskModel;