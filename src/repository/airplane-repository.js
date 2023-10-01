const { Airplane } = require("../models");
//export airplaneRepository

module.exports = {
  //create airplane
  async createAirplane(airplane) {
    return await Airplane.create(airplane);
  },
  //get all airplanes
  async getAllAirplanes() {
    return await Airplane.findAll();
  },
  //get airplane by id
  async getAirplaneById(airplaneId) {
    console.log("ooooo", Airplane);
    console.log("airplaneId", airplaneId);
    return await Airplane.findByPk(airplaneId);
  },
  //update airplane
  async updateAirplane(airplaneId, airplaneDetails) {
    return await Airplane.update(airplaneDetails, {
      where: { id: airplaneId },
    });
  },
  //delete airplane
  async deleteAirplane(airplaneId) {
    return await Airplane.destroy({
      where: { id: airplaneId },
    });
  },
};
