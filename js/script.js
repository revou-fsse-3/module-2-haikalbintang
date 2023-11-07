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
// const modeToggle = document.querySelectorAll(".mode-toggle");

// modeToggle.onclick = function () {
//   document.body.classList.toggle("dark-mode");
//   document.body.classList.add;
// };

// ------------------Light and Dark Modes 2-----------------//
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
});

// -Switch Icon-//
// function updateIcon() {
//   if (body.classList.contains("light-mode")) {
//     modeToggle.className = "dark-moon"; // Replace the class for dark mode
//     modeToggle.textContent = "\u{1F31E}"; // Change the icon for dark mode (you can use Unicode characters or an icon library)
//   } else {
//     modeToggle.className = "light-moon"; // Replace the class for light mode
//     modeToggle.textContent = "\u{1F31D}"; // Change the icon for light mode (you can use different Unicode characters or an icon library)
//   }
// }

// function updateIcon() {
//   if (body.classList.contains("dark-mode")) {
//     modeIcon.src = ""; // Change the icon source for dark mode
//     modeIcon.alt = "Switch to Light Mode";
//   } else {
//     modeIcon.src = "light-mode-icon.png"; // Change the icon source for light mode
//     modeIcon.alt = "Switch to Dark Mode";
//   }
// }

//----------------------Local Storage----------------------//
// function setModeToLocalStorage(mode) {
//   localStorage.setItem("mode", mode);
// }

// function getModeFromLocalStorage() {
//   return localStorage.getItem("mode");
// }

// setModeToLocalStorage("dark");

// const currentMode = getModeFromLocalStorage();

//---------------//
// function saveModePreference(mode) {
//   localStorage.setItem("modePreference", mode);
// }

// // saveModePreference("light");

// function getModePreference() {
//   return localStorage.getItem("modePreference");
// }

// function setInitialMode() {
//   const savedMode = getModePreference();
//   if (savedMode === "light") {
//     // Apply dark mode
//     document.body.classList.add("light-mode");
//     document.body.classList.remove("dark-mode");
//   } else {
//     // Apply light mode (default)
//     saveModePreference("dark");
//     document.body.classList.add("dark-mode");
//     document.body.classList.remove("light-mode");
//   }
// }

// setInitialMode();

// function toggleMode() {
//   const currentMode = getModePreference();
//   if (currentMode === "light") {
//     saveModePreference("light");
//     document.body.classList.remove("dark-mode");
//   } else {
//     saveModePreference("dark");
//     document.body.classList.add("dark-mode");
//   }
// }

// TEST//
// function saveModePreference(mode) {
//   localStorage.setItem("modePreference", mode);
// }

// function getModePreference() {
//   return localStorage.getItem("modePreference");
// }

// function setInitialMode() {
//   const savedMode = getModePreference();
//   if (savedMode === "light") {
//     // Apply light mode
//     document.body.classList.add("light-mode");
//     document.body.classList.remove("dark-mode");
//   } else {
//     // Apply dark mode (default)
//     saveModePreference("dark");
//     document.body.classList.add("dark-mode");
//     document.body.classList.remove("light-mode");
//   }
// }

// // Check if there's a saved mode preference before setting the initial mode
// if (getModePreference() === null) {
//   saveModePreference("dark"); // Set the default mode
// }
// setInitialMode();

// function toggleMode() {
//   const currentMode = getModePreference();
//   if (currentMode === "light") {
//     saveModePreference("dark");
//     document.body.classList.add("dark-mode");
//     document.body.classList.remove("light-mode");
//   } else {
//     saveModePreference("light");
//     document.body.classList.add("light-mode");
//     document.body.classList.remove("dark-mode");
//   }
// }

// ---Light and Dark mode, and Local Storage--- //
function setModePreference(mode) {
  localStorage.setItem("mode", mode);
}

function getModePreference() {
  return localStorage.getItem("mode");
}

function applyModePreference() {
  const mode = getModePreference();
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

window.addEventListener("load", applyModePreference);

const toggleButton = document.getElementById("mode-toggle");

toggleButton.addEventListener("click", () => {
  const currentMode = getModePreference();

  if (currentMode === "dark") {
    setModePreference("light");
  } else {
    setModePreference("dark");
  }

  applyModePreference();
});
