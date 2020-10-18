const _ = require('lodash');

module.exports = {
  Query: {
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
  },
  Book: {
    async speakers(session, args, {dataSources}, info) {
      const speakers = await dataSources.speakerAPI.getSpeakers();
      const returns = speakers.filter((speaker) =>{
        return _.filter(session.speakers, {id: speaker.id}).length > 0;
      })
      return returns;
    }
  }
};