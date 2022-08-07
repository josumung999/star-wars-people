const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
  Query: () => ({
    allPeople: () => [...new Array(6)]
  }),
  People: () => ({
    id: "1",
    name: "Anakin SkyWalker",
    height: 172,
    mass: 77,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1"
  })
}

const server = new ApolloServer({ 
  typeDefs,
  mocks
});



server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});