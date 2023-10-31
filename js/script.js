"use strict";

alert("Hello 👋 Welcome to AADC: Cheetah. Photo App");
alert("Collect 10 loves and you can join Our Community! ❤️😊");

const likeButton = document.getElementById("increment-button");
const loveButton = document.getElementById("love-button");
const logoNotif = document.getElementById("logo-notif");

const footerForm = document.getElementById("form-feedback");
footerForm.style.display = "none";

let notif = 0;
// let love = 0;

function totalNotif() {
  notif++;
  logoNotif.textContent = notif;
  if (notif > 9) {
    alert(
      "Welcome to the Club, Cheetah lovers !! 😊😊 and lets fill in the Form! 🔥🔥"
    );
    footerForm.style.display = "block";
  }
  console.log(notif);
}

// function lovedImage() {}

// Like Button //
likeButton.onclick = totalNotif;

// Love Button //
loveButton.onclick = totalNotif;

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navHidden = document.querySelector(".nav-hidden");

  menuToggle.addEventListener("click", function () {
    navHidden.classList.toggle("active");
  });
});
