"use strict";

class UserStorage {
  static #users = {
    id: ["pandanam739", "염개발", "김팀장"],
    pw: ["1234", "1234", "123456"],
    name: ["우리밋", "정훈", "니니"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
