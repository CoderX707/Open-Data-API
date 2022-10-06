var { buildSchema } = require('graphql');
// GraphQL schema
const graphQLUsersSchema = buildSchema(`
    type User {
        id: ID
        first_name: String
        last_name: String
        email: String
        address: String
        gender: String
    }
    type PaginateResult{
        data:[User]
        per_page:Int
        page_number:Int
        total:Int
    }
    type Query {
        users: [User]
        user(id: ID!): User
        usersByPaginate(per_page:Int, page_number:Int): PaginateResult
    }
    type Mutation {
        createUser(first_name: String, last_name: String, email: String, address: String, gender: String): User
        deleteUser(id: ID!): User
        updateUser(id: ID!,first_name: String, last_name: String, email: String, address: String, gender: String): User
    }
`);

module.exports = { graphQLUsersSchema };
