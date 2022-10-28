"use strict";

//? CTRL ROuter의 함수들을 모아 놓음

const home = (req, res) => {
  res.render("home/index.ejs");
};

const login = (req, res) => {
  res.render("home/login.ejs");
};

module.exports = { home, login };
