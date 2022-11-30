const homeContainer = document.querySelector(".home-container");
const navTitle = document.querySelector(".nav-title");
const navText = document.querySelectorAll(".nav-text");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const ctx = document.getElementById("pieChart");

const nav_open = function () {
  homeContainer.classList.toggle("nav-active-grid");
  overlay.classList.toggle("hidden");
  for (let i = 0; i < 5; i++) {
    navText[i].classList.toggle("hidden");
  }
};

nav.addEventListener("click", nav_open);

const data = {
  labels: ["Parol", "Mannitol", "Morfin", "Aspirin", "Kortizon", "Penisilin"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 234, 122, 90],
      backgroundColor: [
        "#2364aa",
        "#3da5d9",
        "#5fad56",
        "#b1c149",
        "#fed234",
        "#fe6148",
      ],
      hoverOffset: 4,
    },
  ],
};

new Chart(ctx, {
  type: "doughnut",
  data: data,
});
