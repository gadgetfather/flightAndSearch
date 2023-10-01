const validateFlight = (req, res, next) => {
  const {
    departure,
    arrival,
    departureDate,
    arrivalDate,
    departureTime,
    arrivalTime,
    price,
    airline,
  } = req.body;
  if (!price) {
    console.log("Midleware", price);
    return res.status(400).json({ message: "All fields are required" });
  }
  next();
};

module.exports = {
  validateFlight,
};
