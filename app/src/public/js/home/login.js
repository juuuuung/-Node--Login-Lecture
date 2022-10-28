"use strict";

const id = document.getElementById("id"),
  pw = document.getElementById("pw"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = { id: id.value, pw: pw.value };
}
