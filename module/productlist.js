"use strict";

import { toggleModal } from "./productModal";
import { registerCart } from "./productCart";
import { scrollProductlist } from "./scrollProductlist";
import { showBeerDescription } from "./showBeerDescription";
import { calculateBasePrice } from "./beer-price";

window.addEventListener("DOMContentLoaded", init);

function init() {
  fetchBeersData();
  showBeerDescription();
}

function fetchBeersData() {
  const url = "https://hangover3.herokuapp.com/beertypes";

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      receiveBeerstData(data);
    });
}

function receiveBeerstData(beersData) {
  beersData.forEach(showBeer);
}

function showBeer(beer) {
  const template = document.querySelector("#beerTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".beerName").textContent = `${beer.name}`;
  copy.querySelector(".beerCategory").textContent = `${beer.category}`;
  copy.querySelector(".beerPrice").textContent = `${calculateBasePrice(beer.alc)} DKK`;
  copy.querySelector(".beerGlass").src = `assets/beer/${beer.label}`;
  copy.querySelector(".beerGlass").alt = beer.label;
  copy.querySelector("article#beer1").addEventListener("click", () => {
    toggleModal(beer);
  });
  //Round prices
  /* let splitPrice = price.split(" ");
  let onlyPrice = splitPrice[0];
  let roundedPrice = Math.ceil(onlyPrice);
  console.log(roundedPrice); */

  //forEach.copy add id

  const parent = document.querySelector(".beersContainer");
  parent.appendChild(copy);

  registerCart();
  scrollProductlist();
  // passModalData(beer);
}
