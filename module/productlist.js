"use strict";

import { registerModal } from "./productModal";
import { registerCart } from "./productCart";
import { scrollProductlist } from "./scrollProductlist";

window.addEventListener("DOMContentLoaded", init);

function init() {
  fetchBeersData();
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

function receiveBeerstData(data) {
  data.forEach(showBeer);
}

function showBeer(beer) {
  console.log(beer);
  const template = document.querySelector("#beerTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".beerName").textContent = `${beer.name}`;
  copy.querySelector(".beerCategory").textContent = `${beer.category}`;
  let price = (copy.querySelector(".beerPrice").textContent = `${beer.alc * 10} DKK`);
  let beerImage = `${beer.label}`;
  console.log(beerImage);
  copy.querySelector(".beerGlass").src = `assets/beer/${beerImage}`;

  //Round prices
  /* let splitPrice = price.split(" ");
  let onlyPrice = splitPrice[0];
  let roundedPrice = Math.ceil(onlyPrice);
  console.log(roundedPrice); */

  //forEach.copy add id

  const parent = document.querySelector(".beersContainer");
  parent.appendChild(copy);

  //const beerImage =

  registerModal();
  registerCart();
  scrollProductlist();
}
