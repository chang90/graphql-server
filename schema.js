const {
  gql
} = require('apollo-server');
module.exports = gql `
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

# This "Book" type defines the queryable fields for every book in our data source.
type Book {
  id: ID
  title: String
  description: String
  startsAt: String
  endsAt: String
  room: String
  day: String
  format: String
  track: String @deprecated(reason:"some reason"),
  level: String
  speakers: [Speaker]
  favorite: Boolean
}

type Mutation {
  toggleFavoriteBook(id: ID): Book
  addNewBook(book: BookInput): Book
}
input BookInput {
  title: String!
  description: String
  startsAt: String
  endsAt: String
  room: String
  day: String
  format: String
  track: String
  level: String
}

type Speaker {
  id: ID!
  bio: String
  name: String
  books: [Book]
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
  bookById(id:ID): Book,
  speakers:[Speaker],
  speakerById(id:ID): Speaker,
}
`;