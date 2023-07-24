const Tarea = require('./tarea');

class Tareas {
    constructor() {
        this._listado = new Map();
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado.set(tarea.id, tarea);
    }
}

module.exports = Tareas;
