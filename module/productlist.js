"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  registerModal();
  registerCart();
  scrollProductlist();
}

//product modal
function registerModal() {
  const beers = document.querySelectorAll(".beer");

  for (const beer of beers) {
    beer.addEventListener("click", toggleModal);
  }
}

function toggleModal() {
  document.querySelector("#modal").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector("#productlist").classList.add("noScroll");
  document.querySelector(".exitModal").addEventListener("click", closeModal);

  function closeModal() {
    document.querySelector("#modal").classList.add("hidden");
    document.querySelector("#pageMask").classList.add("hidden");
    document.querySelector("#productlist").classList.remove("noScroll");
  }
}

//product cart
function registerCart() {
  const cart = document.querySelector(".cart");
  cart.addEventListener("click", toggleCart);
}

function toggleCart() {
  document.querySelector("#cart").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector(".exitCart").addEventListener("click", closeCart);
  document.querySelector("#productlist").classList.add("noScroll");

  function closeCart() {
    document.querySelector("#cart").classList.add("hidden");
    document.querySelector("#pageMask").classList.add("hidden");
    document.querySelector("#productlist").classList.remove("noScroll");
  }
}

//scroll arrows
function scrollProductlist() {
  document.querySelector(".scrollArrow2").addEventListener("click", scrollRight);
  document.querySelector(".scrollArrow1").addEventListener("click", scrollLeft);
}

function scrollRight() {
  const beer7 = document.getElementById("beer7");
  beer7.scrollIntoView({ behavior: "smooth", block: "center" });
}

function scrollLeft() {
  const beer1 = document.getElementById("beer1");
  beer1.scrollIntoView({ behavior: "smooth", block: "center" });
}
