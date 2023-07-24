require('colors');
const { inquirerMenu } = require('./helpers/inquirer');
const { pausa } = require('./helpers/mensajes');

const main = async () => {
    let opt = '';
    do {
        const {opcion: opt} = await inquirerMenu();
        console.log(typeof(opt));
    } while(opt !== '0');
};

main();
