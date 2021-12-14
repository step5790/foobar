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
    if (beerToAdd.quantity > 1) {
      removeQuantity(beer);
    } else {
      console.log("can't add 0 beers to cart");
    }
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
  //increase quantity by one
  beerToAdd.quantity++;
  console.log("ready to add to cart:", beerToAdd.quantity, beer);
}

function removeQuantity(beer) {
  console.log(beer, "quantity should be decreased");
  //find beer in array
  beerToAdd.quantity--;
  console.log("ready to add to cart:", beerToAdd.quantity, beer);
}
