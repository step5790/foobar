"use strict";

export function calculateBasePrice(alc) {
  return alc * 10;
}

export function calculateSubTotal(basePrice, obj) {
  return basePrice * obj.quantity;
}

export function calculateTotal() {}
