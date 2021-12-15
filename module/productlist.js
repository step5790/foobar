"use strict";

import { toggleModal } from "./productModal";
import { registerCart } from "./productCart";
import { scrollProductlist } from "./scrollProductlist";
import { showBeerDescription } from "./showBeerDescription";
import { calculateBasePrice } from "./beer-price";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  const url = "https://hangover3.herokuapp.com/";
  //get dynamic data
  const dynamicData = await fetchData(url);
  //get beertypes
  const beersData = await fetchData(`${url}beertypes`);
  const beersOnTap = getBeersOnTap(dynamicData);
  console.log(beersOnTap, beersData);
  // showBeerDescription();
}

async function fetchData(url) {
  const res = await fetch(url);
  const jsonData = await res.json();
  return jsonData;
}

function getBeersOnTap(data) {
  const beersOnTap = [];
  data.taps.forEach((tap) => {
    console.log(tap.beer);
    //add beers to array
    beersOnTap.push(tap.beer);
  });
  //make new array with only unique names to array
  const uniqueNames = removeDuplicates(beersOnTap);
  return uniqueNames;
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
