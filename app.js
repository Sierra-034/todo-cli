const { guardarArchivo } = require('./helpers/guardarArchivo');
const {
    inquirerMenu, pausa, leerInput, listarTareasBorrar, confirmar
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    
    do {
        opt = await inquirerMenu();
        switch(opt) {
            case 1:
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case 2:
                tareas.listadoCompleto();
                break;
            case 3:
                tareas.listarPendientesCompletadas();
                break;
            case 4:
                tareas.listarPendientesCompletadas(false);
                break;
            case 6:
                const id = await listarTareasBorrar(tareas.listado);
                if (id !== 0) {
                    const confirm = await confirmar('¿Estás seguro?');
                    if (confirm) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
                break;
        }
        
        guardarArchivo(tareas.listado);
        if (opt != 0) await pausa();
    } while(opt != 0);
};

main();
