import * as taskController from '../controllers/tasks.controller.js';
import express from 'express';
import taskModel from '../models/task.model.js';

const router = express.Router();

/**
 * Async y Await, en vez de usar el tipico tratamiento de errores mediante promesas
 */
router.get('/', async (req, res) => {
  console.log('WEBSERV GET: ');
  try {
    const data = await taskController.findAllTasks();
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message:
        err.message ||
        'Something went wrong while retrieving  all the tasks from the data base.',
    });
  }
});

//Búsqueda de tareas
router.get('/search', async (req, res) => {
  console.log('API search :');
  taskController.search(req, res);
});
//Llena la base de datos
router.post('/filldata', (req, res) => {
  console.log('WEBSERV POST: ' + JSON.stringify(taskController.fillDb())),
    res.status(200).send(taskController.fillDb());
});

//Devuelve una tarea
router.get('/:id', async (req, res) => {
  console.log('API get a task :');
  taskController.findTask(req, res);
});

//Añade una tarea
router.post('/add', (req, res) => {
  console.log('API add: ');
  taskController.addTask(req, res);
});

//actualiza una tarea
router.post('/update/:id', (req, res) => {
  console.log('API update task: ');
  taskController.updateTask(req, res);
});

//Borra una tarea
router.delete('/delete/:id', (req, res) => {
  console.log('API delete: ');
  const { id } = req.params;
  console.log('tarea a borrar: ' + id);
  taskController.deleteTask(id, res);
});

export default router;
