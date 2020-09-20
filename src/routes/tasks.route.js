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
      message: err.message || "Something went wrong while retrieving  all the tasks in the data base."
    });
  }
});



//Devuelve una tarea
router.get('/:id"', (req, res) => {
  console.log('WEBSERV GET: ' + JSON.stringify(taskController.findTask())),
    res.status(200).send(taskController.findTask());
});

//Añade una tarea
router.post('/add', (req, res) => {
  console.log('ENDPOINT ADD: ');
  const tareaNueva =
    taskController.addTask(req, res);
  console.log(tareaNueva);
});

//Búsqueda de tareas
router.get('/search', (req, res) => {
  console.log('WEBSERV GET: ' + JSON.stringify(taskController.searchTask())),
    res.status(200).send(taskController.searchTask());
});

//actualiza una tarea
router.put('/update', (req, res) => {
  console.log('WEBSERV POST: ' + JSON.stringify(taskController.updateTask())),
    res.status(200).send(taskController.updateTask());
});

//Borra una tarea 
router.delete('/delete', (req, res) => {
  console.log('WEBSERV POST: ' + JSON.stringify(taskController.deleteTask())),
    res.status(200).send(taskController.deleteTask());
});


//Llena la base de datos
router.post('/filldata', (req, res) => {
  console.log('WEBSERV POST: ' + JSON.stringify(taskController.fillDb())),
    res.status(200).send(taskController.fillDb());
});
export default router;
