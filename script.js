const homeContainer = document.querySelector(".home-container");
const navTitle = document.querySelector(".nav-title");
const navText = document.querySelectorAll(".nav-text");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const nav_open = function () {
  homeContainer.classList.toggle("nav-active-grid");
  navTitle.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  for (let i = 0; i < 5; i++) {
    navText[i].classList.toggle("hidden");
  }
};

nav.addEventListener("click", nav_open);
