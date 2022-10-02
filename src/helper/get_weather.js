const axios = require('axios');
const { getWeatherAPIUrl } = require('./constants');

async function getWeatherDetails(city) {
    const requestUrl = getWeatherAPIUrl(city);
    try {
        const response = await axios.get(requestUrl);
        return response.data;
    } catch (error) {
        return error.message;
    }
}
module.exports = { getWeatherDetails }