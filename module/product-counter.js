"use strict";

const BeerObject = {
  beerName: "name",
  quantity: 1,
};

let beerToAdd = {};

export function registerCounter(e) {
  console.log(e);
  const count = e.target.dataset.counter;
  if (count === "plus") {
    addQuantity();
  } else {
    if (beerToAdd.quantity > 1) {
      removeQuantity();
    } else {
      console.log("can't add 0 beers to cart");
    }
  }
  displayQuantity();
}

export function createBeerObject(beer) {
  // beerToAdd.beerName = "";
  // beerToAdd.quantity = "";
  console.log(beerToAdd);
  console.log("beer to create", beer);
  const newBeer = Object.create(BeerObject);
  newBeer.beerName = beer;
  newBeer.quantity = 1;
  beerToAdd = newBeer;
  console.log(beerToAdd);
}

function addQuantity() {
  console.log(beerToAdd);
  //increase quantity by one
  beerToAdd.quantity++;
  console.log("ready to add to cart:", beerToAdd.quantity, beerToAdd.beerName);
}

function removeQuantity() {
  //find beer in array
  beerToAdd.quantity--;
  console.log("ready to add to cart:", beerToAdd.quantity, beerToAdd.beerName);
}

export function displayQuantity() {
  document.querySelector(".beerQuantity").dataset.quantity = beerToAdd.quantity;
  document.querySelector(".beerQuantity").textContent = beerToAdd.quantity;
}
