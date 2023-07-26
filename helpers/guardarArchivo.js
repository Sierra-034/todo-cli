const fs = require('fs');

const archivo = './db/data.json';

function guardarArchivo(data) {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

function leerArchivo() {
    if (!fs.existsSync(archivo)) return null;
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    return JSON.parse(info);
}

module.exports = {
    guardarArchivo,
    leerArchivo,
}
