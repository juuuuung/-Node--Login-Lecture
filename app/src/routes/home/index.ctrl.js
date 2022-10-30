// "use strict";

//? CTRL ROuter의 함수들을 모아 놓음

const output = {
  home: (req, res) => {
    res.render("home/index.ejs");
  },
  login: (req, res) => {
    res.render("home/login.ejs");
  },
};

const users = {
  id: ["pandanam739", "염개발", "김팀장"],
  pw: ["1234", "1234", "123456"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "login falied",
    });
  },
};

module.exports = { output, process };
