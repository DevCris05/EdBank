const user_db = "admin";
const pass_db = "admin";

const user = document.getElementById("user");
const pass = document.getElementById("pass");
const user_error = document.getElementById("user_error");
const pass_error = document.getElementById("pass_error");

function login() {
  if (user.value === user_db && pass.value === pass_db) {
    location.replace("./html/dashboard.html");
  } else if (user.value !== user_db && pass.value !== pass_db) {
    pass.style.borderColor = "red";
    pass_error.style.opacity = "1";
    user.style.borderColor = "red";
    user_error.style.opacity = "1";
  } else if (user.value !== user_db || user.value === "") {
    user.style.borderColor = "red";
    user_error.style.opacity = "1";
  } else if (pass.value !== pass_db || pass.value === "") {
    pass.style.borderColor = "red";
    pass_error.style.opacity = "1";
  }
}

const btn_eye = document.querySelector("#btn_password");
const eyes = document.querySelector("#img_eyes");

btn_eye.addEventListener("click", (e) => {
  if (pass.type === "password") {
    pass.type = "text";
    eyes.src = "./img/ojo.png";
  } else {
    pass.type = "password";
    eyes.src = "./img/vista.png";
  }
});
