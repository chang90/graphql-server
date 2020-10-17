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
}

module.exports = BookAPI;