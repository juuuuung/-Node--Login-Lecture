"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  login() {
    const body = this.body;
    const { id, pw } = UserStorage.getUserInfo(body.id);
    if (id) {
      if (id === body.id && pw === body.pw) {
        return { success: true };
      }
      return { success: false, msg: "NO Password" };
    }
    return { success: false, msg: "NOT ID IN Database" };
  }
}

module.exports = User;
