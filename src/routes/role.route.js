import express from 'express';
import * as roleCtrl from '../controllers/role.controller.js';

const router = express.Router();

router.route('/').get(roleCtrl.findAll);

export default router;
