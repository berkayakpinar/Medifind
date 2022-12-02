const homeContainer = document.querySelector(".home-container");
const navTitle = document.querySelector(".nav-title");
const navText = document.querySelectorAll(".nav-text");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const ctx = document.getElementById("pieChart");
const addText = document.querySelector(".text");
const addModal = document.querySelector(".add-modal");
const pharmacyList = document.querySelector(".pharmacy-list");

const iptName = document.querySelector(".name");
const iptAdress = document.querySelector(".adress");
const iptCity = document.querySelector(".city");

const btnAdd = document.querySelector(".add");
const btnBack = document.querySelector(".back");

const onBlur = function () {
  overlay.classList.remove("hidden");
};

const onScreen = function (item) {
  overlay.classList.add("hidden");
  addModal.classList.add("hidden");
};

const openModal = function () {
  addModal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

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

nav.addEventListener("mouseover", onBlur);
nav.addEventListener("mouseout", onScreen);
addText.addEventListener("click", openModal);
overlay.addEventListener("click", onScreen);
btnBack.addEventListener("click", onScreen);
btnAdd.addEventListener("click", (e) => {
  if (iptName || iptAdress || iptCity !== "") {
    const newLi = document.createElement("li");
    const newName = document.createElement("p");
    const newAdress = document.createElement("p");
    newName.innerHTML = iptName.value;
    newAdress.innerHTML = iptAdress.value;
    newLi.title = newName;
    newLi.Adress = newAdress;
    pharmacyList.appendChild(newLi);
  }
});
