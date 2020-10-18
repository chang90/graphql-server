module.exports = {
  books: (parent, args, {dataSources}, info) => {
    return dataSources.bookAPI.getBooks(args);
  },
  bookById: (parent, {id}, {dataSources}, info) => {
    return dataSources.bookAPI.getBookById(id);
  },
  speakers: (parent, args, {dataSources}, info) => {
    return dataSources.speakerAPI.getSpeakers();
  },
  speakerById: (parent, {id}, {dataSources}, info) => {
    return dataSources.speakerAPI.getSpeakerById(id);
  },
};