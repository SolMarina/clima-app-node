const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodeUlr = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeUlr}&appid=de47c9681532d3d233ddfc2834d8ad78`,
        headers: { 'Accept': '*/*' }
    });

    const resp = await instance.get();
    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);


    }
    const data = resp.data;
    const dirección = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        dirección,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatLng
}


