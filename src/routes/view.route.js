import express from 'express';

const router = express.Router();
/**En esta ruta, lo que haremos es devolver
 * el html que hemos creado el ejs index
 */

const view = `<!DOCTYPE html>
<html>
  <head>
    <title>CRUD APP</title>
  </head>
  <body>Esta es mi primera vista</body>
</html>
`;
router.get('/', (req, res) => {
  res.send(view);
});

export default router;
