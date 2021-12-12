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

  //forEach.copy add id

  const parent = document.querySelector(".beersContainer");
  parent.appendChild(copy);

  registerModal();
  registerCart();
  scrollProductlist();
}
