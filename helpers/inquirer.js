require('colors');
const inquirer = require('inquirer');

const preguntasMenuPrincipal = {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
        { value: 1, name: '1. Crear tarea' },
        { value: 2, name: '2. Listar tareas' },
        { value: 3, name: '3. Listar tareas completadas' },
        { value: 4, name: '4. Listar tareas pendientes' },
        { value: 5, name: '5. Completar tarea(s)' },
        { value: 6, name: '6. Borrar tarea' },
        { value: 0, name: 'Salir' },
    ],
};

const inquirerMenu = async () => {
    const { opcion } = await inquirer.prompt(preguntasMenuPrincipal);
    return opcion;
};

const preguntasPausa = {
    type: 'input',
    name: 'pausaAnswer',
    message: `Presione ${'Enter'.green} para continuar`,
};

const pausa = async () => {
    const { pausaAnswer } = await inquirer.prompt(preguntasPausa);
    return pausaAnswer;
}

module.exports = {
    inquirerMenu,
    pausa,
}
