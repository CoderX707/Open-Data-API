const { getWeatherDetails } = require("../../helper/get_weather");

// Root resolver
const weatherResolver = {
    async getWeather({ city }) {
        const response = await getWeatherDetails(city);
        return response;
    },

};

module.exports = { weatherResolver };
