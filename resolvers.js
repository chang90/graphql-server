
const Query = require('./resolvers/query')
const Book = require('./resolvers/book')
const Mutation = require('./resolvers/mutation')

module.exports = {
  Query,
  Book,
  Mutation,
  Room: {
    EUROPA: 'Europa',
    SOL:'Sol',
    SATURN: 'Saturn'
  }
};