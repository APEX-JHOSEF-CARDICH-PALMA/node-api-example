import express from 'express';
const router = express.Router();


var task = [
  { "title": 1, "description": "Hi this is a little description ", "telf": "1576584545" }
];
router.get('/', (req, res) => {
  res.status(200).send(task);
});

export default router;
