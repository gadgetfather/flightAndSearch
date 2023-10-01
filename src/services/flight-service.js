const { flightRepository, airplaneRepository } = require("../repository");

//export flightService
module.exports = {
  //create flight
  async createFlight(flight) {
    const airplane = await airplaneRepository.getAirplaneById(
      flight.airplaneId
    );
    console.log("airplane", airplane);
    if (!airplane) {
      throw new Error("Airplane not found");
    }
    return await flightRepository.createFlight({
      ...flight,
      totalSeats: airplane.capacity,
    });
  },
  //get all flights
  async getAllFlights() {
    return await flightRepository.getAllFlights();
  },
  //get flight by id
  async getFlightById(flightId) {
    return await flightRepository.getFlightById(flightId);
  },
  //update flight
  async updateFlight(flightId, flightDetails) {
    return await flightRepository.updateFlight(flightId, flightDetails);
  },
  //delete flight
  async deleteFlight(flightId) {
    return await flightRepository.deleteFlight(flightId);
  },
};
