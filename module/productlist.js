"use strict";

import { toggleModal } from "./productModal";
import { registerCart } from "./productCart";
import { scrollProductlist } from "./scrollProductlist";
import { showBeerDescription } from "./showBeerDescription";

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

  registerModal(beersData);
}

function registerModal(beersData) {
  //console.log(beersData);
  // const beers = document.querySelectorAll(".beer");
  // for (const beer of beers) {
  //   beer.addEventListener("click", () => {
  //     toggleModal(beersData);
  //   });
  // }
  // **mine**
  // beersData.forEach((beer) => {
  //   document.querySelector(".modalCategoryText").textContent = beer.caregory;
  // });
  // toggleModal(beersData);
}

function showBeer(beer) {
  const template = document.querySelector("#beerTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".beerName").textContent = `${beer.name}`;
  let category = copy.querySelector(".beerCategory");
  category.textContent = `${beer.category}`;
  let price = copy.querySelector(".beerPrice");
  price.textContent = `${beer.alc * 10} DKK`;
  let beerImage = `${beer.label}`;

  copy.querySelector(".beerGlass").src = `assets/beer/${beerImage}`;
  copy.querySelector(".beerGlass").alt = beerImage;
  let beername = copy.querySelector("article");
  beername.dataset.name = beer.name;
  console.log(beername.dataset.name);

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

// function passModalData(beer) {
//   document.querySelector(".modalCategoryText").textContent = `${beer.category}`;
//   //console.log(beer);
// }
