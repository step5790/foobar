"use strict";

const order = [];

export function addToCart(singleOrder) {
  console.log("add", singleOrder, "to cart");
  //check if beer is already in array
  if (order.some((el) => el.beer.name === singleOrder.beer.name)) {
    console.log(singleOrder.beer.name, "is already added");
    //find beer in array
    const indexOfBeer = order.findIndex((obj) => obj.beer.name === singleOrder.beer.name);
    order[indexOfBeer].quantity = order[indexOfBeer].quantity + singleOrder.quantity;
    console.log("new quantity:", order[indexOfBeer].quantity);
  } else {
    order.push(singleOrder);
  }
  console.log("updated order:", order);
}
