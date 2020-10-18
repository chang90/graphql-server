module.exports = {
  toggleFavoriteBook: (parent, {id}, {dataSources}, info) => {
    return dataSources.bookAPI.toggleFavoriteBook(id);
  },
  addNewBook:(parent, {book}, {dataSources}, info) => {
    return dataSources.bookAPI.addBook(book);
  },
}