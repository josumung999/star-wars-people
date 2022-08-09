const resolvers = {
  Query: {
    allPeople: (_, __, {dataSources}) => {
      return dataSources.peopleAPI.getAllPeople();
    },
    findPerson: (_, name, {dataSources}) => {
      return dataSources.peopleAPI.findPerson(name);
    }
  }
};


module.exports = resolvers;