"use strict";

const order = [];

export function addToCart(singleOrder) {
  console.log("add", singleOrder, "to cart");
  //check if beer is already in array
  if (order.some((el) => el.beerName === singleOrder.beerName)) {
    console.log(singleOrder.beerName, "is already added");
    //find beer in array
    const indexOfBeer = order.findIndex((obj) => obj.beerName === singleOrder.beerName);
    order[indexOfBeer].quantity = order[indexOfBeer].quantity + singleOrder.quantity;
    console.log("new quantity:", order[indexOfBeer].quantity);
  } else {
    order.push(singleOrder);
  }
  console.log("updated order:", order);
}
