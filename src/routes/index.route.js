import express from 'express';
import tasksRouter from './tasks.route.js';

const router = express.Router();

router.use('/tasks', tasksRouter);

/*
router.use('/role', roleRouter);
router.use('/user', userRouter);
*/

export default router;
