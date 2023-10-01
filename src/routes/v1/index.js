const express = require("express");
const cityController = require("../../controllers/city-controller");
const router = express.Router();

// city routes
router.post("/city", cityController.createCity);
router.get("/city", cityController.getAllCities);
router.get("/city/:id", cityController.getCityById);
router.get("/city/:name", cityController.getCityByName);
router.put("/city/:id", cityController.updateCity);
router.delete("/city/:id", cityController.deleteCity);

module.exports = router;
