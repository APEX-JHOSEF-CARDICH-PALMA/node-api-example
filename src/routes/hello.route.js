import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('HOLA ESTA ES UNA RUTA');
});

export default router;
