"use strict";

const id = document.getElementById("id"),
  userName = document.getElementById("name"),
  pw = document.getElementById("pw"),
  confirmPsword = document.getElementById("confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("id 입력해");
  if (pw.value !== confirmPsword.value) {
    return alert("비번 일치 xx");
  }

  const req = {
    id: id.value,
    name: userName.value,
    pw: pw.value,
  };

  fetch("/register", {
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
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => console.log(err));
}
