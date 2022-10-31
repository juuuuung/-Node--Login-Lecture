//? CTRL ROuter의 함수들을 모아 놓음
"use strict";

const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("home/index.ejs");
  },
  login: (req, res) => {
    res.render("home/login.ejs");
  },
  register: (req, res) => {
    res.render("home/register.ejs");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    //? req.body = id,pw,name
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

module.exports = { output, process };
