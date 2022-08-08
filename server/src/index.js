const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PeopleAPI = require('./datasources/people-api');


const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      peopleAPI: new PeopleAPI()
    }
  }
});



server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});