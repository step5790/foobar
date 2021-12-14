"use strict";

const BeerObject = {
  beerName: "name",
  quantity: 1,
};

const beersToAddToCart = [];

export function registerCounter(e) {
  const beerInModal = e.target.closest("#modal").dataset.name;
  const count = e.target.dataset.counter;
  if (count === "plus") {
    console.log("add one", beerInModal);
    //check if beername is in array
    if (beersToAddToCart.some((obj) => obj.beerName === beerInModal) === false) {
      createBeerObject(beerInModal);
    } else {
      addQuantity(beerInModal);
    }
  }
  //check if beername is in array
  // if yes: remove one
  else {
    console.log("remove one", beerInModal);
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
