var { buildSchema } = require('graphql');
// GraphQL schema
const graphQLMoviesSchema = buildSchema(`
    type Movie {
        id: ID
        title: String
        genres: String
        published: String
        thumbnail: String
        budget: String
        box_office_collection: String
        short_description: String
        long_description: String
    }
    type Query {
        movies: [Movie]
        movie(id: ID!): Movie
    }
    type Mutation {
        createMovie(
            title: String,
            genres: String,
            published: String,
            thumbnail: String,
            budget: String,
            box_office_collection: String,
            short_description: String,
            long_description: String,
        ): Movie
        deleteMovie(id: ID!): Movie
        updateMovie(
            id: ID!,
            title: String,
            genres: String,
            published: String,
            thumbnail: String,
            budget: String,
            box_office_collection: String,
            short_description: String,
            long_description: String,
            ): Movie
    }
`);

module.exports = { graphQLMoviesSchema };
