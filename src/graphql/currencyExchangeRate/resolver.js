const { getCurrencyData } = require("../../helper/get_currency_data");

// Root resolver
const currencyResolver = {
    // query callback
    currency: async () => {
        const data = await getCurrencyData();
        return data;
    }

};

module.exports = { currencyResolver };
