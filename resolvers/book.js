const { ApolloError } = require('apollo-server');
const _ = require('lodash');
module.exports = {
  async speakers(session, args, {dataSources}, info) {
    try{
      const speakers = await dataSources.speakerAPI.getSpeakers();
      const returns = speakers.filter((speaker) =>{
        return _.filter(session.speakers, {id: speaker.id}).length > 0;
      })
      return returns;
    } catch (error) {
      return new ApolloError("Unable to get speakers", "ERROR", {token:'SPEAKERBROKEN'})
    }
    
  }
};