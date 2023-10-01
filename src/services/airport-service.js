const { airportRepository } = require("../repository");

//export airport service
module.exports = {
  //create airport
  async createAirport(name, cityId, address) {
    try {
      const airport = await airportRepository.getAirportByName(name);
      if (airport) {
        throw { message: "Airport already exists", status: 400 };
      }
      return await airportRepository.createAirport(name, cityId, address);
    } catch (error) {
      throw error;
    }
  },
  //get all airports
  async getAllAirports(filter) {
    try {
      return await airportRepository.getAllAirports(filter);
    } catch (error) {
      throw error;
    }
  },
  //get airport by id
  async getAirportById(id) {
    try {
      const airport = await airportRepository.getAirportById(id);
      if (!airport) {
        throw { message: "Airport not found", status: 404 };
      }
      return airport;
    } catch (error) {
      throw error;
    }
  },
  //update airport
  async updateAirport(id, name, cityId, address) {
    try {
      const airport = await airportRepository.getAirportById(id);
      if (!airport) {
        throw { message: "Airport not found", status: 404 };
      }
      return await airportRepository.updateAirport(id, name, cityId, address);
    } catch (error) {
      throw error;
    }
  },
  //delete airport
  async deleteAirport(id) {
    try {
      const airport = await airportRepository.getAirportById(id);
      if (!airport) {
        throw { message: "Airport not found", status: 404 };
      }
      return await airportRepository.deleteAirport(id);
    } catch (error) {
      throw error;
    }
  },

  //get airports of a city
  async getAirportsOfCity(id) {
    try {
      const city = await cityRepository.getCityById(id);
      if (!city) {
        throw { message: "City not found", status: 404 };
      }
      return await cityRepository.getAirportsOfCity(id);
    } catch (error) {
      throw error;
    }
  },
};
