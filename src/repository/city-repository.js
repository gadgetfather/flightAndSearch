// require city model
const { City } = require("../models");
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
  async getAllCities() {
    try {
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
};
