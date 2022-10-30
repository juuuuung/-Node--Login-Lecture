//? CTRL ROuter의 함수들을 모아 놓음
"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index.ejs");
  },
  login: (req, res) => {
    res.render("home/login.ejs");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;

    const users = UserStorage.getUsers("id", "pw");

    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        response.success = true;
        return res.json(response);
      }
    }
    response.success = false;
    response.msg = "Login Failed";
    return res.json(response);
  },
};

module.exports = { output, process };
