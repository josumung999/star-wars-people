const {RESTDataSource} = require('apollo-datasource-rest');


class PeopleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/';
  }

  async getAllPeople() {
    const data = await this.get(`people`);
    return data.results;
  }
}


module.exports = PeopleAPI;

