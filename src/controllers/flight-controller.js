const { flightService } = require("../services/index");

//create flight -> /api/flights
exports.createFlight = async (req, res, next) => {
  try {
    const flight = await flightService.createFlight(req.body);
    res.status(201).json(flight);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//get all flights -> /api/flights
exports.getAllFlights = async (req, res, next) => {
  try {
    const flights = await flightService.getAllFlights(req.query);
    res.status(200).json(flights);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
