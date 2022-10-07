require("dotenv").config();

const path = require("path");
const express = require("express");
const Sequelize = require("sequelize");

const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;

const app = express();

const db = require("./config/connection");

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "the website development of Bernie McKnight" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});
