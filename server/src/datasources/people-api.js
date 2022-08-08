const {RESTDataSource} = require('apollo-datasource-rest');


class PeopleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://swapi.dev/api/`;
  }

  getAllPeople() {
    return this.get('people');
  }
}


module.exports = PeopleAPI;

