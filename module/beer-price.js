"use strict";

export function calculateBasePrice(alc) {
  return alc * 10;
}

export function calculateSubTotal(basePrice, obj) {
  return basePrice * obj.quantity;
}

export function calculateTotal(order) {
  console.log("calculate total on: ", order);
  const subTotals = [];
  order.forEach((obj) => {
    const subTotal = calculateSubTotal(calculateBasePrice(obj.beer.alc), obj);
    subTotals.push(subTotal);
  });
  console.log(subTotals);
  //calculate sum of values in array
  const reducerFunc = (accumulator, curr) => accumulator + curr;
  return subTotals.reduce(reducerFunc);
}
