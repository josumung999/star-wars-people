const {gql} = require('apollo-server');

const typeDefs = gql`
  type Query {
    allPeople: [People!]!
    findPerson(name: String!): People
  }
  # schema definition will go here
  type People {
    name: String!
    height: String!
    mass: String!
    hair_color: String!
    skin_color: String!
    eye_color: String!
    birth_year: String!
    gender: String!
    homeworld: String!
  }
`;

module.exports = typeDefs;