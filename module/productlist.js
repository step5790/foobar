"use strict";

import { toggleModal } from "./productModal";
import { registerCart } from "./productCart";
import { scrollProductlist, scrollInitial } from "./scrollProductlist";
// import { showBeerDescription } from "./showBeerDescription";
import { calculateBasePrice } from "./beer-price";

window.addEventListener("DOMContentLoaded", init);

let beersOnTap = [];

async function init() {
  const url = "https://hangover3.herokuapp.com/";
  //get dynamic data
  let dynamicData = await fetchData(url);
  //get beertypes
  const beersData = await fetchData(`${url}beertypes`);
  const newBeersOnTap = getBeersOnTap(dynamicData);
  //check if updated
  if (arraysEqual(beersOnTap, newBeersOnTap) === true) {
  } else {
    const availableBeers = filterBeersOnTap(newBeersOnTap, beersData);
    receiveBeersData(availableBeers);
    beersOnTap = newBeersOnTap;
  }
  //loop every 3 sec
  setTimeout(init, 3000);
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

async function fetchData(url) {
  const res = await fetch(url);
  const jsonData = await res.json();
  return jsonData;
}

function getBeersOnTap(data) {
  const beersOnTap = [];
  data.taps.forEach((tap) => {
    //add beers to array
    beersOnTap.push(tap.beer);
  });
  //make new array with only unique names to array
  const uniqueNames = removeDuplicates(beersOnTap);
  return uniqueNames;
}

function filterBeersOnTap(beersOnTap, beersData) {
  const availableBeers = beersData.filter((beer) => beersOnTap.includes(beer.name));
  return availableBeers;
}

function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

function receiveBeersData(beersData) {
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
  copy.querySelector("article.beer").addEventListener("click", () => {
    toggleModal(beer);
  });

  const parent = document.querySelector(".beersContainer");
  parent.appendChild(copy);

  registerCart();
  scrollInitial();
  scrollProductlist();
  // passModalData(beer);
}
