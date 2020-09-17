import express from 'express';
import * as taskController from '../controllers/tasks.controller.js';
const router = express.Router();



router.get('/', (req, res) => {
  res.status(200).send(taskController.findAllTasks());
});

export default router;
