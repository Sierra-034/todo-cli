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
        this._listado.forEach(item => lyst.push(item));
        return lyst;
    }

    listadoCompleto() {
        console.log();
        this.listado.forEach((value, index) => {
            const {desc, completadoEn} = value;
            const idx = `${index + 1}`.green;
            let str = `${idx} ${desc} :: `;
            str += (completadoEn) ? 'completado'.green : 'pendiente'.red;
            console.log(str);
        });
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado.set(tarea.id, tarea);
    }
}

module.exports = Tareas;
