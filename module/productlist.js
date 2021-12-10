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
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector(".exitModal").addEventListener("click", closeModal);
  document.querySelector("#productlist").classList.add("noScroll");

  function closeModal() {
    document.querySelector("#modal").classList.add("hidden");
    document.querySelector("#pageMask").classList.add("hidden");
    document.querySelector("#productlist").classList.remove("noScroll");
  }
}
