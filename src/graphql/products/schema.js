var { buildSchema } = require('graphql');
// GraphQL schema
const graphQLProductSchema = buildSchema(`
    type Product { 
        id: Int
        title: String
        description: String
        price: Int
        discountPercentage: Float
        rating: Float
        stock: Int
        brand: String
        category: String
        thumbnail: String
        images: [String ] 
    }
    type PaginateResult{
        data:[Product]
        per_page:Int
        page_number:Int
        total:Int
    }
    type Query {
        products: [Product]
        product(id: ID!): Product
        productByPaginate(per_page:Int, page_number:Int): PaginateResult
    }
    type Mutation {
        createProduct(title:String!, description:String!, price:Int!, stock:Int!, brand:String!, category:String!): Product
        deleteProduct(id: ID!): Product
        updateProduct(id:ID!, title:String, description:String, price:Int, stock:Int, brand:String, category:String): Product
    }
`);

module.exports = { graphQLProductSchema };
