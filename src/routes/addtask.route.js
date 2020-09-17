import express from 'express';

const router = express.Router();

router.post('/addtask', (req, res) => {
    console.log(req.body);
    console.log("WEBSERV: Data received ");
    res.status(200).send({ "message": "Data task received" });
});

export default router;
