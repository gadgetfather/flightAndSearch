const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const setupAndStartServer = async () => {
  //create the express app
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);
  //configure the express app
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    // sync the database
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true }).then(() => {
        console.log("Sync Database");
      });
    }
  });
};

setupAndStartServer();
