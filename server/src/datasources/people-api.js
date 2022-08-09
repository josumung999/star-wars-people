const {RESTDataSource} = require('apollo-datasource-rest');


class PeopleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/';
  }
  // TODO: Implement pagination
  async getAllPeople() {
    const data = await this.get(`people`);
    return data.results;
  }

  // TODO: Setup filtering by name
  async findPersonByName(name) {
    const data = await this.get(`people/?search=${name}`);
    return data.results;
  }

  // TODO: Get informations of a specific user
  async getSpecificPerson(id) {
    const data = await this.get(`people/${id}`);
    return data;
  }
}


module.exports = PeopleAPI;

