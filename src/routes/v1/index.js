const express = require("express");
const cityController = require("../../controllers/city-controller");
const airportController = require("../../controllers/airport-controller");
const flightController = require("../../controllers/flight-controller");
const { validateFlight } = require("../../middlewares/flight-middleware");
const router = express.Router();

// city routes
router.post("/city", cityController.createCity);
router.get("/city", cityController.getAllCities);
router.get("/city/:id", cityController.getCityById);
router.get("/city/:name", cityController.getCityByName);
router.put("/city/:id", cityController.updateCity);
router.delete("/city/:id", cityController.deleteCity);
router.get("/city/:id/airports", cityController.getAirportsOfCity);
router.post("/city/bulk", cityController.bulkCreateCities);

// airport routes
router.post("/airport", airportController.createAirport);
router.get("/airport", airportController.getAllAirports);
router.get("/airport/:id", airportController.getAirportById);
router.put("/airport/:id", airportController.updateAirport);
router.delete("/airport/:id", airportController.deleteAirport);

//flight routes
router.post("/flight", validateFlight, flightController.createFlight);
router.get("/flight", flightController.getAllFlights);

module.exports = router;
