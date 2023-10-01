const { Airport } = require("../models");

//export airport repository

module.exports = {
  //create airport
  async createAirport(name, cityId, address) {
    try {
      return await Airport.create({ name, cityId, address });
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  },
  //get all airports
  async getAllAirports(filter) {
    try {
      if (filter.name) {
        return await Airport.findAll({
          where: { name: { [Op.like]: `%${filter.name}%` } },
        });
      }
      return await Airport.findAll();
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  },
  //get airport by id
  async getAirportById(id) {
    try {
      return await Airport.findByPk(id);
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  },
  //get airport by name
  async getAirportByName(name) {
    try {
      return await Airport.findOne({ where: { name } });
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  },
  //update airport
  async updateAirport(id, name, cityId, address) {
    try {
      return await Airport.update({ name, cityId, address }, { where: { id } });
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  },
  //delete airport
  async deleteAirport(id) {
    try {
      return await Airport.destroy({ where: { id } });
    } catch (error) {
      throw { message: error.message, status: 500 };
    }
  },
};
