const books = require('./sessions.json');
const {DataSource} = require('apollo-datasource');

class BookAPI extends DataSource {
  constructor(){
    super();
  }

  initialize(config) {

  }

  getBooks(){
    return books;
  }
}

module.exports = BookAPI;