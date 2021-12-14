"use strict";

const order = [];

export function addToCart(singleOrder) {
  console.log("add", singleOrder, "to cart");
  //check if beer is already in array
  if (order.some((el) => el.beerName === singleOrder.beerName)) {
    console.log(singleOrder.beerName, "is already added");
    singleOrder.beerName;
  } else {
    order.push(singleOrder);
    console.log("updated order:", order);
  }
}
