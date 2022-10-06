var express = require('express');
var cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const { usersRoute } = require('./src/rest_api/users');
const { PORT } = require('./src/helper/constants');
const { moviesRoute } = require('./src/rest_api/movies');
const { jobsRoute } = require('./src/rest_api/jobs');
const { graphQLUsersSchema } = require('./src/graphql/users/schema');
const { usersResolver } = require('./src/graphql/users/resolver');
const { graphQLMoviesSchema } = require('./src/graphql/movies/schema');
const { moviesResolver } = require('./src/graphql/movies/resolver');
const { jobsResolver } = require('./src/graphql/jobs/resolver');
const { graphQLJobsSchema } = require('./src/graphql/jobs/schema');
const { imageRoute } = require('./src/rest_api/images');
const { currencyExchangeRate } = require('./src/rest_api/currencyExchangeRate');
const { graphQLCurrencySchema } = require('./src/graphql/currencyExchangeRate/schema');
const { currencyResolver } = require('./src/graphql/currencyExchangeRate/resolver');
const { authRoute } = require('./src/rest_api/auth');
const { authResolver } = require('./src/graphql/auth/resolver');
const { graphQLAuthSchema } = require('./src/graphql/auth/schema');
const { weatherRoute } = require('./src/rest_api/weather');
const { graphQLWeatherSchema } = require('./src/graphql/weather/schema');
const { weatherResolver } = require('./src/graphql/weather/resolver');
const { productsRoute } = require('./src/rest_api/products');
const { graphQLProductSchema } = require('./src/graphql/products/schema');
const { productsResolver } = require('./src/graphql/products/resolver');

var app = express();
app.use(express.json());
app.use(cors({origin:'*'}));
// serve static files
app.use('/static', express.static('src/doc/public'))
app.use('/images/products', express.static('src/mock_data/products_mock_data/products'))
// Documentation file route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/src/doc/index.html');
});

///////////////// REST API routes /////////////////
// Users CRUD operation routing
app.use('/rest-api/v1/users/', usersRoute);
// Movies CRUD operation routing
app.use('/rest-api/v1/movies/', moviesRoute);
// jobs CRUD operation routing
app.use('/rest-api/v1/jobs/', jobsRoute);
// Images routing
app.use('/rest-api/v1/images/', imageRoute);
// get currency exchange rate
app.use('/rest-api/v1/currency/', currencyExchangeRate);
// auth routing
app.use('/rest-api/v1/auth/', authRoute);
// weather routing
app.use('/rest-api/v1/weather/', weatherRoute);
// products routing
app.use('/rest-api/v1/products/', productsRoute);


///////////////// GraphQL endpoint routing /////////////////
// users CRUD operation in graphql
app.use(
  '/graphql/v1/users',
  graphqlHTTP({
    schema: graphQLUsersSchema,
    rootValue: usersResolver,
    graphiql: true,
  })
);

// movies CRUD operation in graphql
app.use(
  '/graphql/v1/movies',
  graphqlHTTP({
    schema: graphQLMoviesSchema,
    rootValue: moviesResolver,
    graphiql: true,
  })
);

// jobs CRUD operation in graphql
app.use(
  '/graphql/v1/jobs',
  graphqlHTTP({
    schema: graphQLJobsSchema,
    rootValue: jobsResolver,
    graphiql: true,
  })
);

// products CRUD operation in graphql
app.use(
  '/graphql/v1/products',
  graphqlHTTP({
    schema: graphQLProductSchema,
    rootValue: productsResolver,
    graphiql: true,
  })
);

// get currency exchange rate in graphql
app.use(
  '/graphql/v1/currency',
  graphqlHTTP({
    schema: graphQLCurrencySchema,
    rootValue: currencyResolver,
    graphiql: true,
  })
);

// auth operation in graphql
app.use(
  '/graphql/v1/auth',
  graphqlHTTP({
    schema: graphQLAuthSchema,
    rootValue: authResolver,
    graphiql: true,
  })
);

// weather operation in graphql
app.use(
  '/graphql/v1/weather',
  graphqlHTTP({
    schema: graphQLWeatherSchema,
    rootValue: weatherResolver,
    graphiql: true,
  })
);

// Redirect to home page if route is not found
app.use(function (req, res) {
  res.status(404);
  res.redirect('/');
});

app.listen(PORT, () =>
  console.log(`Express Server Now Running On localhost:${PORT}/`)
);
