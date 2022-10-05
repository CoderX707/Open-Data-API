const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const ENV = process.env.ENV || 'DEV';
const MOCK_DATA = process.env.MOCK_DATA || 'mock_data';
const TOKEN_KEY = process.env.TOKEN_KEY || 'jwt_secret_mockx';
const USERS_DATA = path.join(
  __dirname,
  `../${MOCK_DATA}/users_mock_data/users.json`
);
const MOVIES_DATA = path.join(
  __dirname,
  `../${MOCK_DATA}/movies_mock_data/movies.json`
);
const JOBS_DATA = path.join(
  __dirname,
  `../${MOCK_DATA}/jobs_mock_data/jobs.json`
);
const PRODUCTS_DATA = path.join(
  __dirname,
  `../${MOCK_DATA}/products_mock_data/products.json`
);
const CURRENCY_EXCHANGE_RATE_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

function getWeatherAPIUrl(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_APP_ID}&units=metric`;
}

module.exports = { PORT, MOCK_DATA, USERS_DATA, MOVIES_DATA, JOBS_DATA, CURRENCY_EXCHANGE_RATE_URL, TOKEN_KEY, getWeatherAPIUrl,PRODUCTS_DATA };
