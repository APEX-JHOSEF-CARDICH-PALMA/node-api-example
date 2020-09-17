import express from 'express';
import roleRouter from './role.route.js';
import userRouter from './user.route.js';
import tasksRouter from './tasks.route.js';
import firstView from './view.route.js';
import newTaks from './addtask.route.js';

const router = express.Router();

router.use('/addtask', newTaks);

router.use('/role', roleRouter);
router.use('/user', userRouter);
router.use('/tasks', tasksRouter);
router.use('/views', firstView);

export default router;
