require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async () => {
    let opt = '';
    do {
        // opt = await inquirerMenu();
        const tareas = new Tareas();
        const tarea = new Tarea('Comprar comida');
        tareas._listado.set(tarea.id, tarea);
        console.log(tareas);
        if (opt != 0) await pausa();
    } while(opt != 0);
};

main();
