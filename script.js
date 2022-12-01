const homeContainer = document.querySelector(".home-container");
const navTitle = document.querySelector(".nav-title");
const navText = document.querySelectorAll(".nav-text");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const ctx = document.getElementById("pieChart");

const blur = function () {
  overlay.classList.toggle("hidden");
};

nav.addEventListener("mouseover", blur);
nav.addEventListener("mouseout", blur);

/*CHART*/
const data = {
  labels: ["Parol", "Mannitol", "Morfin", "Aspirin", "Kortizon", "Penisilin"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 234, 122, 90],
      backgroundColor: [
        "#65A099",
        "#9B6D2C",
        "#6162F3",
        "#9F933E",
        "#9B463E",
        "#917564",
      ],
      hoverOffset: 7,
    },
  ],
};

new Chart(ctx, {
  type: "doughnut",
  data: data,
});
