"use strict";

const order = [];

export function addToCart(singleOrder) {
  console.log("add", singleOrder, "to cart");
  //add order to array
  order.push(singleOrder);
  console.log(order);
}
