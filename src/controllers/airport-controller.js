const { airportService } = require("../services");

// create airport -> /api/airports
exports.createAirport = async (req, res, next) => {
  try {
    const { name, cityId, address } = req.body;
    const airport = await airportService.createAirport(name, cityId, address);
    res.status(201).json(airport);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get all airports -> /api/airports
exports.getAllAirports = async (req, res, next) => {
  try {
    const airports = await airportService.getAllAirports(req.query);
    res.status(200).json(airports);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get airport by id -> /api/airports/:id
exports.getAirportById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const airport = await airportService.getAirportById(id);
    res.status(200).json(airport);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// update airport -> /api/airports/:id
exports.updateAirport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, cityId, address } = req.body;
    const airport = await airportService.updateAirport(
      id,
      name,
      cityId,
      address
    );
    res.status(200).json(airport);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// delete airport -> /api/airports/:id
exports.deleteAirport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const airport = await airportService.deleteAirport(id);
    res.status(200).json(airport);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get airports of a city -> /api/cities/:id/airports
exports.getAirportsOfCity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const airports = await airportService.getAirportsOfCity(id);
    res.status(200).json(airports);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
