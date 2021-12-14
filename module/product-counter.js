"use strict";

const BeerObject = {
  beerName: "name",
  quantity: 1,
};

let beerToAdd = {};

export function registerCounter(beer, e) {
  const count = e.target.dataset.counter;
  if (count === "plus") {
    addQuantity(beer);
  } else {
    removeQuantity(beer);
  }
}

export function createBeerObject(beer) {
  console.log("beer to create", beer);
  const newBeer = Object.create(BeerObject);
  newBeer.beerName = beer;
  newBeer.quantity = 1;
  beerToAdd = newBeer;
}

function addQuantity(beer) {
  console.log(beer, "quantity should be increased");
  //find beer in array
  //increase quantity by one
}

function removeQuantity(beer) {
  console.log(beer, "quantity should be decreased");
  //find beer in array
  //decrease quantity by one
}
