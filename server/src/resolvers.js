const resolvers = {
  Query: {
    allPeople: (_, __, {dataSources}) => {
      return dataSources.peopleAPI.getAllPeople();
    },
  }
};


module.exports = resolvers;