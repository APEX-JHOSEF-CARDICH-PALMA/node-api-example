import express from 'express';
import roleRouter from './role.route.js';
import userRouter from './user.route.js';
import helloRouter from './hello.route.js';

const router = express.Router();

router.use('/role', roleRouter);
router.use('/user', userRouter);
router.use('/hello', helloRouter);

export default router;
