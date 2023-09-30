const express = require("express");
const dotenv = require("dotenv");
const setupAndStartServer = () => {
  //create the express app
  const app = express();
  //configure dotenv
  dotenv.config();
  //configure the express app
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

setupAndStartServer();
