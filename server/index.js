require("dotenv").config();

const path = require("path");
const express = require("express");
const routes = require("./routes/index");
const Sequelize = require("sequelize");

const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;

const app = express();

const db = require("./config/connection");

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});
