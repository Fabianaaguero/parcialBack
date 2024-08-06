const mongoose = require('mongoose');

const tareaSchema = (
    {
        nombre: {
            type: String,
            required: true
        },
        prioridad: {
            type: String,
            required: true
        },
        cumplida: {
            type: Boolean,
            required: false
        }
    })

module.exports = mongoose.model('Tareas', tareaSchema);