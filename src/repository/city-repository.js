// require city model
const { City, airport } = require("../models");
const { Op } = require("sequelize");
// export city repository
module.exports = {
  // create city
  async createCity(name) {
    try {
      return await City.create({ name });
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  },
  // get all cities
  async getAllCities(filter) {
    try {
      if (filter.name) {
        return await City.findAll({
          where: { name: { [Op.like]: `%${filter.name}%` } },
        });
      }
      return await City.findAll();
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  },
  // get city by id
  async getCityById(id) {
    try {
      return await City.findByPk(id);
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  },
  // get city by name
  async getCityByName(name) {
    try {
      return await City.findOne({ where: { name } });
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  },
  // update city
  async updateCity(id, name) {
    try {
      return await City.update({ name }, { where: { id } });
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  },
  // delete city
  async deleteCity(id) {
    try {
      return await City.destroy({ where: { id } });
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  },

  //get airports of a city
  async getAirportsOfCity(id) {
    try {
      const city = await City.findByPk(id);
      if (!city) {
        throw { message: "City not found", status: 404 };
      }
      return city.getAirports();
    } catch (error) {
      throw error;
    }
  },
};
