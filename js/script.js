"use strict";

// -----------------Say 'Hello'----------------//
// alert("Hello 👋 Welcome to AADC: Cheetah. Photo App");
// alert("Collect 10 loves and you can join Our Community! ❤️😊");

// ------Add Love To The Notification and Toggle Form------//
const loveButton = document.getElementById("love-button");
const likeButton = document.getElementById("increment-button");
const logoNotif = document.getElementById("logo-notif");

const footerForm = document.getElementById("form-feedback");
footerForm.style.display = "none";

let notif = 0;
// let love = 0;

function totalNotif() {
  notif++;
  logoNotif.textContent = notif;
  if (notif > 0) {
    alert(
      "Welcome to the Club, Cheetah lovers !! 😊😊 Lets fill in the Form in the bottom of the page! 🔥🔥"
    );
    footerForm.style.display = "block";
  }
}

// function lovedImage() {}

// Like Button //
likeButton.onclick = totalNotif;

// Love Button //
loveButton.onclick = totalNotif;

// --------------------Dropdown Menu-----------------------//
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navHidden = document.querySelector(".nav-hidden");

  menuToggle.addEventListener("click", function () {
    navHidden.classList.toggle("active");
  });
});

// -------------------Light and Dark Modes-----------------//
const logo = document.querySelector(".logo-img");

logo.onclick = function () {
  document.body.classList.toggle("dark-theme");
};
