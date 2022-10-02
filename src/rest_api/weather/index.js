const express = require('express');
const { getWeatherDetails } = require('../../helper/get_weather');

const weatherRoute = express.Router();

// get weather details by city name
weatherRoute.get('/:city', async function (req, res) {
    const { city } = req.params;
    const response = await getWeatherDetails(city);
    if (response.cod == 200) {
        return res.status(200).json(response);
    } else {
        return res.status(404).json({ message: response });
    }
});

module.exports = { weatherRoute };
