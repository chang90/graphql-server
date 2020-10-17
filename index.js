const { ApolloServer, gql } = require('apollo-server');
const BookAPI = require('./datasources/books');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = require('./schema.js')
const resolvers = require('./resolvers.js')

const dataSources = () =>({
  bookAPI: new BookAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});