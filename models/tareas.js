const { leerArchivo } = require('../helpers/guardarArchivo');
const Tarea = require('./tarea');

class Tareas {
    constructor() {
        const tareas = leerArchivo();
        if (tareas) {
            const mappedInfo = tareas.map(value => [value.id, value]);
            this._listado = new Map(mappedInfo);
        } else {
            this._listado = new Map();
        }
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
