const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ab0cc5577ce518fa0707c69de1d9c0e5&units=metric`);
    return resp.data.main.temp;



}


module.exports = {
    getClima
}