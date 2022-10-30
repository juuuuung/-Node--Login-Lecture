//? server center
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//? ROUTING
const home = require("./src/routes/home/home");

//? APP SETING
app.set("views", "./src/views");
app.set("view engine", "ejs");

//? MIDDLE WARE APPLICATION
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//? MIDDLE WARE ROUTER
app.use("/", home);

module.exports = app;
