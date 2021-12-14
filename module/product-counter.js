"use strict";

const BeerObject = {
  beerName: "name",
  quantity: 1,
};

const beersToAddToCart = [];

export function registerCounter(beer, e) {
  const count = e.target.dataset.counter;
  if (count === "plus") {
    console.log("add one", beer);
    //check if beername is in array
    if (beersToAddToCart.some((obj) => obj.beerName === beer) === false) {
      createBeerObject(beer);
    } else {
      addQuantity(beer);
    }
  }
  //check if beername is in array
  // if yes: remove one
  else {
    console.log("remove one", beer);
  }
}

function createBeerObject(beer) {
  console.log("beer to create", beer);
  const newBeer = Object.create(BeerObject);
  newBeer.beerName = beer;
  newBeer.quantity = 1;
  beersToAddToCart.push(newBeer);
  console.log(beersToAddToCart);
}

function addQuantity(beer) {
  console.log(beer, "quantity should be increased");
  //find beer in array
  //increase quantity by one
}

function removeQuantity(beer) {
  console.log(beer, "quantity should be increased");
  //find beer in array
  //decrease quantity by one
}
