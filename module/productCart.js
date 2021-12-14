"use strict";

import { calculateBasePrice } from "./beer-price";

let order = [];

export function registerCart() {
  const cart = document.querySelector(".cartButton");
  cart.addEventListener("click", toggleCart);
}

function toggleCart() {
  document.querySelector("#cart").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector(".exitCart").addEventListener("click", closeCart);
  document.querySelector("#productlist").classList.add("noScroll");
  //display cart items

  displayCartItems();

  document.querySelector("#cartButton").addEventListener("click", addToLocalStorage);
}

function displayCartItems() {
  //check if exists in localStorage
  if (!localStorage.getItem("order")) {
    order.forEach((obj) => displayCartItem(obj));
  } else {
    const orderFromLocalStorage = JSON.parse(localStorage.getItem("order"));
    orderFromLocalStorage.forEach((obj) => displayCartItem(obj));
    //make order array into same as orderFromLocalStorage is
    order = orderFromLocalStorage;
  }
}

function closeCart() {
  document.querySelector("#cart").classList.add("hidden");
  document.querySelector("#pageMask").classList.add("hidden");
  document.querySelector("#productlist").classList.remove("noScroll");
  //clear cart
  document.querySelector(".cartItems").innerHTML = "";
  addToLocalStorage();
}

export function addToCart(singleOrder) {
  console.log("add", singleOrder, "to cart");
  //check if beer is already in array
  if (order.some((el) => el.beer.name === singleOrder.beer.name)) {
    console.log(singleOrder.beer.name, "is already added");
    increaseBeerQuantityInOrder(singleOrder);
  } else {
    order.push(singleOrder);
  }
  console.log("updated order:", order);
  addToLocalStorage();
}

function increaseBeerQuantityInOrder(singleOrder) {
  //find beer in array
  const indexOfBeer = order.findIndex((obj) => obj.beer.name === singleOrder.beer.name);
  order[indexOfBeer].quantity = order[indexOfBeer].quantity + singleOrder.quantity;
  console.log("new quantity:", order[indexOfBeer].quantity);
}

function increaseBeerQuantityInCart(singleOrder) {
  //find beer in array
  const indexOfBeer = order.findIndex((obj) => obj.beer.name === singleOrder.beer.name);
  order[indexOfBeer].quantity++;
  console.log("new quantity:", order[indexOfBeer].quantity);
}

function decreaseBeerQuantityInOrder(singleOrder) {
  //find beer in array
  const indexOfBeer = order.findIndex((obj) => obj.beer.name === singleOrder.beer.name);
  order[indexOfBeer].quantity--;
  console.log("new quantity:", order[indexOfBeer].quantity);
}

function displayCartItem(obj) {
  const parent = document.querySelector(".cartItems");
  const template = document.querySelector("#cartTemp").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".cartProductImage").src = `assets/beer/${obj.beer.label}`;
  copy.querySelector(".cartProductImage").alt = obj.beer.label;
  copy.querySelector(".cartName").textContent = obj.beer.name;

  //TODO: calculate price based on quantity
  //calculate total price

  copy.querySelector(".cartPrice").textContent = `${calculateBasePrice(obj.beer.alc)} DKK`;
  const quantityIndicator = copy.querySelector(".beerQuantity");
  displayCartQuantity(quantityIndicator, obj.quantity);
  copy.querySelectorAll(`button[data-button="counter"]`).forEach((button) => {
    button.addEventListener("click", (e) => registerCartCounter(e, obj));
  });
  parent.appendChild(copy);
}

function displayCartQuantity(quantityIndicator, quantity) {
  quantityIndicator.dataset.quantity = quantity;
  quantityIndicator.textContent = quantity;
}

function registerCartCounter(e, obj) {
  const count = e.target.dataset.counter;
  if (count === "plus") {
    increaseBeerQuantityInCart(obj);
  } else {
    if (obj.quantity > 1) {
      decreaseBeerQuantityInOrder(obj);
    } else {
      console.log("beer needs to be removed");
      //TODO:
      //remove beer from array
      //remove the element from cart
      // e.target.closest(".cartProduct").remove();
    }
  }
  displayCartQuantity(e.target.parentElement.querySelector(".beerQuantity"), obj.quantity);
}

function addToLocalStorage() {
  //check if cart is empty
  if (order.length === 0) {
    console.log("cart is empty");
  } else {
    localStorage.setItem("order", JSON.stringify(order));
    console.log("order in localStorage:", JSON.parse(localStorage.getItem("order")));
  }
}

//click on "remove from cart button":
//remove obj from order array
//remove element
