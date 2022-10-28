//? server center
const express = require("express");
const app = express();

//? ROUTING
const home = require("./routes/home/home");

//? APP SETING
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;
