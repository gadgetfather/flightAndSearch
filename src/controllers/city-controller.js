//import city service
const { cityService } = require("../services/index");

// create city -> /api/cities
exports.createCity = async (req, res, next) => {
  try {
    const { name } = req.body;
    const city = await cityService.createCity(name);
    res.status(201).json(city);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get all cities -> /api/cities
exports.getAllCities = async (req, res, next) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    res.status(200).json(cities);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get city by id -> /api/cities/:id
exports.getCityById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const city = await cityService.getCityById(id);
    res.status(200).json(city);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get city by name -> /api/cities/:name
exports.getCityByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const city = await cityService.getCityByName(name);
    res.status(200).json(city);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// update city -> /api/cities/:id
exports.updateCity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const city = await cityService.updateCity(id, name);
    res.status(200).json(city);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// delete city -> /api/cities/:id
exports.deleteCity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const city = await cityService.deleteCity(id);
    res.status(200).json(city);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
