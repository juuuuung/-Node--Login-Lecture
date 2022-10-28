"use strict";

const id = document.getElementById("id"),
  pw = document.getElementById("pw"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = { id: id.value, pw: pw.value };

  console.log(req);
  console.log(JSON.stringify(req));
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}
