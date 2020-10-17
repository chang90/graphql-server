const { ApolloServer, gql } = require('apollo-server');
const BookAPI = require('./datasources/books');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID,
    title: String,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String @deprecated(reason:"some reason"),
    level: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books(
        id: ID,
        title: String,
        description: String,
        startsAt: String,
        endsAt: String,
        room: String,
        day: String,
        format: String,
        track: String ,
        level: String
    ): [Book],
    bookById(id:ID): Book
  }
`;

const resolvers = {
  Query: {
    books: (parent, args, {dataSources}, info) => {
      return dataSources.bookAPI.getBooks(args);
    },
    bookById: (parent, {id}, {dataSources}, info) =>{
      return dataSources.bookAPI.getBookById(id);
    }
  },
};

const dataSources = () =>({
  bookAPI: new BookAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});