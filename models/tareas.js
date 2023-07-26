const Tarea = require('./tarea');

class Tareas {
    constructor() {
        this._listado = new Map();
    }

    get listado() {
        const lyst = new Array();
        this._listado.forEach((value) => {
            lyst.push(value);
        });

        return lyst;
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado.set(tarea.id, tarea);
    }
}

module.exports = Tareas;
