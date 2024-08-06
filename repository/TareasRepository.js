const mongoose = require('mongoose');
const conexionDB = require('../db/db');
const Tareas = require('./Tareas')

conexionDB();

exports.traerTareas = async () => {
    try {
        let tareas = await Tareas.find();
        console.log(tareas);
        return tareas;
    } catch (error) {
        console.log('Hubo un error al traer la lista de tareas. ' + error);
    }
}

exports.traerUnaTarea = async(id) => {
    try {
        let tarea = await Tareas.findById(id);
        console.log(tarea);
        return tarea;
    } catch(error) {
        console.log(error);
    }
}

exports.crearTarea = async (tarea) => {
    try {
        let tareaNueva = await new Tareas(tarea);
        await tareaNueva.save();
        console.log(`Tarea agregada: ${tareaNueva}`);
        return tarea;
    } catch (error) {
        console.log(`No se pudo crear la tarea. ${error}`);
    }
}

exports.eliminarTarea = async (id) => {
    try {
        let tarea = await Tareas.findById(id);
        if (!tarea) {
            console.log('No se encontró la tarea: ' + id);
        } else {
            await Tareas.findOneAndDelete(id);
        }
    } catch (error) {
        console.log(`No se pudo eliminar la tarea. ${error}`);
    }
}


exports.editarTarea = async (id, tareaEditada) => {
    try {
        let tarea = await Tareas.findById(id);
        if (!tarea) {
            console.log('No se encontró la tarea: ' + id);
        } else {
            tarea.nombre = tareaEditada.nombre;
            tarea.prioridad = tareaEditada.prioridad;
            tarea.cumplida = (tareaEditada.cumplida == null ? false : true);

            await tarea.save();
            console.log(`Tarea actualizada: ${tarea}`);
        }
    } catch (error) {
        console.log(`No se pudo editar la tarea. ${error}`);
    }
}