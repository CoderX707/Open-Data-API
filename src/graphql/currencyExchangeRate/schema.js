var { buildSchema } = require('graphql');
// GraphQL schema
const graphQLCurrencySchema = buildSchema(`

    type Countries {
        currencyCode: String
        currencyName: String
        country: String
        rate: Float
    }
    
    type currencyResult {
        base: String
        date: String
        countries: [Countries]
    }

    type Query {
        currency: currencyResult!
    }

`);

module.exports = { graphQLCurrencySchema };
