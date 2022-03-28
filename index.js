const express = require("express");
require("dotenv").config();

var PORT = process.env.PORT;

const path = require("path");

//initialize routes

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "assets")));

//tell app to use routes

app.use((req, res, next) => {
  res.render("404", { title: "404" });
});

app.listen(PORT);
