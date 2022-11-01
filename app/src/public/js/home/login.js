"use strict";

const id = document.getElementById("id"),
  pw = document.getElementById("pw"),
  loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
  if (!id.value) return alert("id입력해");
  else if (!pw.value) return alert("pw입력해");

  const req = { id: id.value, pw: pw.value };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => console.log(err));
}
