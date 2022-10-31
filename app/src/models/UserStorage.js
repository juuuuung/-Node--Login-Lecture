"use strict";

const fs = require("fs").promises;
const approot = require("app-root-path");
class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);

    if (isAll) return users;

    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {
    return fs
      .readFile(`${approot.path}/src/databases/users.json`) //
      .then((data) => {
        return this.#getUsers(data, fields);
      })
      .catch(console.error);
  }

  static getUserInfo(id) {
    return fs
      .readFile(`${approot.path}/src/databases/users.json`) //
      .then((data) => {
        return this.#getUserInfo(data, isAll, id);
      })
      .catch(console.error);
  }

  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (!users.id.includes(userInfo.id)) {
      users.id.push(userInfo.id);
      users.pw.push(userInfo.pw);
      users.name.push(userInfo.name);
      fs.writeFile(
        `${approot.path}/src/databases/users.json`,
        JSON.stringify(users)
      );
      return { success: true };
    } else {
      return { success: false, msg: "아이디 존재" };
    }
  }
}

module.exports = UserStorage;
