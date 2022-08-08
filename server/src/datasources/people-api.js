const {RESTDataSource} = require('apollo-datasource-rest');


class PeopleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/';
  }

  async getAllPeople(page) {
    const data = await this.get(`people/?page=${page ? page : 1}`);
    return data.results;
  }
}


module.exports = PeopleAPI;

