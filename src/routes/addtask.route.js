import express from 'express';

const router = express.Router();

router.post('/addtask', (req, res) => {
    console.log(req.body);
    res.send('recibido');
});

export default router;
