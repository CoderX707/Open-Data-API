const axios = require('axios');
const { CURRENCY_EXCHANGE_RATE_URL } = require('./constants');
const { countryList } = require('./country_list');

async function getCurrencyData() {
    const apiResponse = await axios.get(CURRENCY_EXCHANGE_RATE_URL)
    let countryWithCurrency = [];
    const countryCode = Object.entries(apiResponse.data.rates);
    countryCode.map((code) => {
        countryList.map((object) => {
            if (code[0] === object.currencyCode) {
                object.rate = code[1];
                countryWithCurrency.push(object);
            }
        });
    });
    const countryWithCurrencyWithDetails = {
        base: apiResponse.data.base,
        date: apiResponse.data.date,
        countries: countryWithCurrency,
    };
    return countryWithCurrencyWithDetails;
}
module.exports = { getCurrencyData }