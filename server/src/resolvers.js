const resolvers = {
  Query: {
    allPeople: (_, __, {dataSources}) => {
      return dataSources.peopleAPI.getAllPeople();
    },
    findPerson: (_, {name}, {dataSources}) => {
      return dataSources.peopleAPI.findPersonByName(name);
    },
    person: (_, {id}, {dataSources}) => {
      return dataSources.peopleAPI.getSpecificPerson(id);
    }
  }
};


module.exports = resolvers;