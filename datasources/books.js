const books = require('./sessions.json');
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');

class BookAPI extends DataSource {
  constructor(){
    super();
  }

  initialize(config) {

  }

  getBooks(args){
    return _.filter(books, args);
  }
  getBookById(id){
    const book = _.filter(books, {id: parseInt(id)});
    return book[0];
  }
  toggleFavoriteBook(id){
    const book = _.filter(books, {id: parseInt(id)});
    books[0].favorite = !books[0].favorite;
    return book[0];
  }
  addBook(book){
    book.id = 12;
    books.push(book);
    console.log(book)
    return book;
  }
}

module.exports = BookAPI;