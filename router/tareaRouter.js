const express = require('express');
const TareaRouter = express.Router();
const TareaController = require('../controllers/tareasController');

TareaRouter.use(express.json());

TareaRouter.get('/',TareaController.leerTareas);
TareaRouter.get('/:id',TareaController.leerUnaTarea);
TareaRouter.delete('/:id',TareaController.borrarTarea);
TareaRouter.put('/:id',TareaController.editarTarea);
TareaRouter.post('/',TareaController.nuevaTarea);

module.exports = TareaRouter;