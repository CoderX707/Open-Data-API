var { buildSchema } = require('graphql');
// GraphQL schema
const graphQLAuthSchema = buildSchema(`
type User { email: String
    first_name: String
    last_name: String
    password: String
    id: Int
    token: String }
  
  type response { message: String user: User }

    type Query {
        checkAuth(token: String!): response
    }
    type Mutation {
        registerUser(first_name: String, last_name: String, email: String, password: String): response
        loginUser(email: String, password: String): response
    }
`);

module.exports = { graphQLAuthSchema };
