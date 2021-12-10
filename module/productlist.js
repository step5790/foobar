"use strict";

const beers = document.querySelectorAll(".beer");

window.addEventListener("DOMContentLoaded", registerModal);

function registerModal() {
  for (const beer of beers) {
    beer.addEventListener("click", toggleModal);
  }
}

function toggleModal() {
  console.log("open");
  document.querySelector("#modal").classList.remove("hidden");
  document.querySelector(".exitModal").addEventListener("click", closeModal);

  function closeModal() {
    document.querySelector("#modal").classList.add("hidden");
  }
}
