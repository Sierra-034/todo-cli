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
    
    listarPendientesCompletadas(isCompletada = true) {
        const completadas = (tarea) => tarea.completadoEn !== null;
        const pendientes = (tarea) => tarea.completadoEn === null;

        let filtered = null;
        if (isCompletada) filtered = this.listado.filter(completadas);
        else filtered = this.listado.filter(pendientes);

        console.log();
        filtered.forEach((item, index) => {
            const {desc, completadoEn} = item;
            const idx = `${index + 1}`.green;
            let str = `${idx} ${desc} :: `;
            str += (completadoEn) ? 'completado'.green : 'pendiente'.red;
            console.log(str);
        });
    }

    borrarTarea(id = '') {
        if (this._listado.has(id)) {
            this._listado.delete(id);
        }
    }

    toggleCompletadas(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado.get(id);
            if (!tarea.completadoEn)
                tarea.completadoEn = new Date().toISOString();
        });

        this.listado.forEach(tarea => {
            if(!ids.includes(tarea.id)) {
                this._listado.get(tarea.id).completadoEn = null;
            }
        })
    }
}

module.exports = Tareas;
