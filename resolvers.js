module.exports = {
  Query: {
    books: (parent, args, {dataSources}, info) => {
      return dataSources.bookAPI.getBooks(args);
    },
    bookById: (parent, {id}, {dataSources}, info) =>{
      return dataSources.bookAPI.getBookById(id);
    }
  },
};