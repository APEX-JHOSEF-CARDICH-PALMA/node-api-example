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
      message: err.message || "Something went wrong while retrieving  all the tasks from the data base."
    });
  }
});



//Devuelve una tarea
router.get('/:id', (req, res) => {
  console.log('API get a task :');
  const foudTask = taskController.findTask(req, res);
  console.log(foudTask);
});

//Añade una tarea
router.post('/add', (req, res) => {
  console.log('API add: ');
  const tareaNueva = taskController.addTask(req, res);
  console.log(tareaNueva);
});

//Búsqueda de tareas
router.get('/search/:term', (req, res) => {
  console.log('WEBSERV GET: ' + JSON.stringify(taskController.searchTask()));
});

//actualiza una tarea
router.put('/update/:id', (req, res) => {
  console.log('API update task: ');
  const updatedTask = taskController.updateTask(req, res);
});

//Borra una tarea 
router.delete('/delete/:id', (req, res) => {
  console.log('API delete: ');
  const { id } = req.params;
  console.log('tarea a borrar: ' + id);
  taskController.deleteTask(id, res);
});


//Llena la base de datos
router.post('/filldata', (req, res) => {
  console.log('WEBSERV POST: ' + JSON.stringify(taskController.fillDb())),
    res.status(200).send(taskController.fillDb());
});
export default router;
