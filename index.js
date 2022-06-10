var express = require('express');
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

var app = express();
app.use(express.json());
// serve static files
app.use('/static',express.static('src/doc/public'))
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
// Make Images routing
app.use('/rest-api/v1/images/', imageRoute);


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

// Redirect to home page if route is not found
app.use(function (req, res, next) {
  res.status(404);
  res.redirect('/');
});

app.listen(PORT, () =>
  console.log(`Express Server Now Running On localhost:${PORT}/`)
);
