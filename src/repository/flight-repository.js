const { Flights } = require("../models");

//export flightRepository
module.exports = {
  //create flight
  async createFlight(flight) {
    console.log("flight", flight);
    return await Flights.create(flight);
  },
  //get all flights
  async getAllFlights() {
    return await Flights.findAll();
  },
  //get flight by id
  async getFlightById(flightId) {
    return await Flights.findByPk(flightId);
  },
  //update flight
  async updateFlight(flightId, flightDetails) {
    return await Flights.update(flightDetails, {
      where: { id: flightId },
    });
  },
  //delete flight
  async deleteFlight(flightId) {
    return await Flights.destroy({
      where: { id: flightId },
    });
  },
};
