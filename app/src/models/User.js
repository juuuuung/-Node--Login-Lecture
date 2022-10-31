"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const client = this.body;
    const { id, pw } = await UserStorage.getUserInfo(client.id);
    if (id) {
      if (id === client.id && pw === client.pw) {
        return { success: true };
      }
      return { success: false, msg: "NO Password" };
    }
    return { success: false, msg: "NOT ID IN Database" };
  }
  async register() {
    const client = this.body;
    const response = await UserStorage.save(client);
    return response;
  }
}

module.exports = User;
