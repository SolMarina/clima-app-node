
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    dirección: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true

    }

}).argv;


const getInfo = async (dirección) => {
    try {
        const coords = await lugar.getLugarLatLng(dirección);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.dirección} es de ${temp}.`;
    } catch (e) {

        `No se pudo determinar el clima de ${dirección}`;
    }


}

getInfo(argv.dirección)
    .then(console.log)
    .catch(console.log);