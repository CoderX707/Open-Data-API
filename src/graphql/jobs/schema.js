var { buildSchema } = require('graphql');
// GraphQL schema
const graphQLJobsSchema = buildSchema(`
    type Job {
        _id: ID
        job_title: String
        posted_at: String
        views: String
        thumbnail: String
        apply_url: String
        salary: String
        short_description: String
        long_description: String
    }
    type PaginateResult{
        data:[Job]
        per_page:Int
        page_number:Int
        total:Int
    }
    type Query {
        jobs: [Job]
        job(id: ID!): Job
        jobsByPaginate(per_page:Int, page_number:Int): PaginateResult
    }

    type Mutation {
        createJob(
            job_title: String,
            posted_at: String,
            thumbnail: String,
            apply_url: String,
            salary: String,
            short_description: String,
            long_description: String
        ): Job
        deleteJob(id: ID!): Job
        updateJob(
            id: ID!,
            job_title: String,
            posted_at: String,
            thumbnail: String,
            apply_url: String,
            salary: String,
            short_description: String,
            long_description: String
        ): Job
    }
`);

module.exports = { graphQLJobsSchema };
