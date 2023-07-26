const fs = require('fs');

function guardarArchivo(data) {
    const archivo = './db/data.json';
    fs.writeFileSync(archivo, JSON.stringify(data));
}

module.exports = {
    guardarArchivo,
}
