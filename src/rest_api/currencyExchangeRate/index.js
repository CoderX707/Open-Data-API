const express = require('express');
const { getCurrencyData } = require('../../helper/get_currency_data');

const currencyExchangeRate = express.Router();

// get currency exchange rate
currencyExchangeRate.get('/', async function (req, res) {
  const data = await getCurrencyData();
  res.json(data);
});

module.exports = { currencyExchangeRate };
