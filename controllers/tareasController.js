const Tareas = require('../repository/Tareas');
const TareasRepository = require('../repository/TareasRepository');


exports.leerTareas = async(req, res) => {
    try {
        let tareas = await TareasRepository.traerTareas();
        res.status(200).send(tareas);
    } catch(error) {
        console.log(error);
        res.status(500).send('Hubo un error al listar las tareas.');
    }
}

exports.nuevaTarea = async(req, res) => {
    try {
        let tarea = await TareasRepository.crearTarea(req.body);
        res.status(200).send(tarea);
    } catch(error) {
        console.log(error);
        res.status(500).send('Error al crear tarea.');
    }
}

exports.leerUnaTarea = async(req, res) => {
    try {
        let tarea = await TareasRepository.traerUnaTarea();
        res.status(200).send(tarea);
    } catch(error) {
        console.log(error);
        res.status(500).send('Error al leer la tarea.');
    }
}

exports.borrarTarea = async(req, res) => {
    try {
        let tarea = await TareasRepository.eliminarTarea(req.params.id);
        res.status(200).send('Se eliminó la tarea.')
    } catch(error) {
        console.log(error);
        res.status(500).send('Error al eliminar la tarea.')
    }
}

exports.editarTarea = async(req, res) => {
    try {
        let tarea = await TareasRepository.editarTarea(req.params.id, req.body);
        res.status(200).send(tarea);
    } catch(error) {
        console.log(error);
        res.status(500).send('Error al editar la tarea.')
    }
}