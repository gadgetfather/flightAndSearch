const express = require("express");
const { PORT } = require("./config/serverConfig");
const setupAndStartServer = () => {
  //create the express app
  const app = express();
  //configure dotenv

  //configure the express app
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
};

setupAndStartServer();
