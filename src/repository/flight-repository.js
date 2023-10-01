const { Flights } = require("../models");
const { Op } = require("sequelize");

// This will be used to create the filter object that will be passed to the findAll method of the Flights model.
function createFilter(data) {
  console.log("data", data);
  let filter = {};
  if (data.arrivalAirportId) {
    filter.arrivalAirportId = data.arrivalAirportId;
  }
  if (data.departureAirportId) {
    filter.departureAirportId = data.departureAirportId;
  }
  if (data.departureTime) {
    filter.departureDate = data.departureDate;
  }
  if (data.minPrice) {
    Object.assign(filter, {
      price: {
        [Op.gte]: data.minPrice,
      },
    });
  }
}
//export flightRepository
module.exports = {
  //crete filter

  //create flight
  async createFlight(flight) {
    console.log("flight", flight);
    return await Flights.create(flight);
  },
  //get all flights
  async getAllFlights(filter) {
    const filterObject = createFilter();
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
