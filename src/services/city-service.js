const { cityRepository } = require("../repository/index");

// city service will be more like a wrapper for the repository and useful for business logic
module.exports = {
  // create city
  async createCity(name) {
    try {
      return await cityRepository.createCity(name);
    } catch (error) {
      throw error;
    }
  },
  // get all cities
  async getAllCities(filter) {
    try {
      return await cityRepository.getAllCities(filter);
    } catch (error) {
      throw error;
    }
  },
  // get city by id
  async getCityById(id) {
    try {
      return await cityRepository.getCityById(id);
    } catch (error) {
      throw error;
    }
  },
  // get city by name
  async getCityByName(name) {
    try {
      return await cityRepository.getCityByName(name);
    } catch (error) {
      throw error;
    }
  },
  // update city
  async updateCity(id, name) {
    try {
      return await cityRepository.updateCity(id, name);
    } catch (error) {
      throw error;
    }
  },
  // delete city
  async deleteCity(id) {
    try {
      return await cityRepository.deleteCity(id);
    } catch (error) {
      throw error;
    }
  },
  //get airports of a city
  async getAirportsOfCity(id) {
    try {
      return await cityRepository.getAirportsOfCity(id);
    } catch (error) {
      throw error;
    }
  },
};
