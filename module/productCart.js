"use strict";

import {
  calculateBasePrice,
  calculateSubTotal,
  calculateTotal,
} from "./beer-price";

let order = [];

export function registerCart() {
  const cart = document.querySelector(".cartButton");
  cart.addEventListener("click", toggleCart);

  document.querySelector("button#cartButton").addEventListener("click", () => {
    openLogin();
    closeCart();
    document.querySelector("#pageMask").classList.remove("hidden");
  });
  document.querySelector("#close-modal").addEventListener("click", closeLogin);
}

export function toggleCart() {
  document.querySelector("#cart").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector("#productlist").classList.add("noScroll");
  displayCartItems();

  document
    .querySelector("#cartButton")
    .addEventListener("click", updateLocalStorage);
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
  displayTotal(calculateTotal(order));
  toggleTotal();
}

function toggleTotal() {
  //check if order and localStorage is empty
  if (!localStorage.getItem("order") || order.length === 0) {
    //hide total
    document.querySelector(".cartTotalPriceContainer").classList.add("hidden");
    document.querySelector(".cartEmptyFeedback").classList.remove("hidden");
  } else {
    //show total
    document
      .querySelector(".cartTotalPriceContainer")
      .classList.remove("hidden");
    document.querySelector(".cartEmptyFeedback").classList.add("hidden");
  }
}
document.querySelector(".exitCart").addEventListener("click", closeCart);
document.querySelector("#pageMask").addEventListener("click", closeCart);

function closeCart() {
  document.querySelector("#cart").classList.add("hidden");
  document.querySelector("#pageMask").classList.add("hidden");
  document.querySelector("#productlist").classList.remove("noScroll");
  //clear cart
  document.querySelector(".cartItems").innerHTML = "";
  updateLocalStorage();
}

export function addToCart(singleOrder) {
  //check if beer is already in array
  if (order.some((el) => el.beer.name === singleOrder.beer.name)) {
    increaseBeerQuantityInOrder(singleOrder);
  } else {
    order.push(singleOrder);
  }
  updateLocalStorage();
}

function increaseBeerQuantityInOrder(singleOrder) {
  //find beer in array
  const indexOfBeer = order.findIndex(
    (obj) => obj.beer.name === singleOrder.beer.name
  );
  order[indexOfBeer].quantity =
    order[indexOfBeer].quantity + singleOrder.quantity;
}

function increaseBeerQuantityInCart(singleOrder) {
  //find beer in array
  const indexOfBeer = order.findIndex(
    (obj) => obj.beer.name === singleOrder.beer.name
  );
  order[indexOfBeer].quantity++;
}

function decreaseBeerQuantityInCart(singleOrder) {
  //find beer in array
  const indexOfBeer = order.findIndex(
    (obj) => obj.beer.name === singleOrder.beer.name
  );
  order[indexOfBeer].quantity--;
}

function displayCartItem(obj) {
  const parent = document.querySelector(".cartItems");
  const template = document.querySelector("#cartTemp").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".cartProductImage").src = `assets/beer/${obj.beer.label}`;
  copy.querySelector(".cartProductImage").alt = obj.beer.label;
  copy.querySelector(".cartName").textContent = obj.beer.name;

  //calculate sub-total price
  const subTotalText = copy.querySelector(".cartPrice");
  displaySubTotal(subTotalText, obj);
  const quantityIndicator = copy.querySelector(".beerQuantity");
  displayCartQuantity(quantityIndicator, obj.quantity);
  //track counter interaction
  copy.querySelectorAll(`button[data-button="counter"]`).forEach((button) => {
    button.addEventListener("click", (e) => registerCartCounter(e, obj));
  });
  //track remove item -button
  copy.querySelector(".modalRemoveCart").addEventListener("click", (e) => {
    removeItemFromOrder(obj);
    removeElementFromCart(e);
    displayTotal(calculateTotal(order));
    toggleTotal();
    updateLocalStorage();
  });
  parent.appendChild(copy);
}

function displaySubTotal(el, obj) {
  el.textContent = `${calculateSubTotal(
    calculateBasePrice(obj.beer.alc),
    obj
  )} DKK`;
}

function displayCartQuantity(quantityIndicator, quantity) {
  quantityIndicator.dataset.quantity = quantity;
  quantityIndicator.textContent = quantity;
}

function displayTotal(total) {
  //check that there are items in cart
  if (total > 0) {
    document.querySelector(".cartTotalPrice2").textContent = `${total} DKK`;
  } else {
    toggleTotal();
  }
}

function registerCartCounter(e, obj) {
  const count = e.target.dataset.counter;
  if (count === "plus") {
    increaseBeerQuantityInCart(obj);
  } else {
    if (obj.quantity > 1) {
      decreaseBeerQuantityInCart(obj);
    } else {
      removeItemFromOrder(obj);
      removeElementFromCart(e);
    }
  }
  displayCartQuantity(
    e.target.parentElement.querySelector(".beerQuantity"),
    obj.quantity
  );
  displaySubTotal(
    e.target.closest(".cartProduct").querySelector(".cartPrice"),
    obj
  );
  displayTotal(calculateTotal(order));
  toggleTotal();
  updateLocalStorage();
}

function updateLocalStorage() {
  //check if order is empty
  if (order.length === 0) {
    //check if exists in localStorage
    if (localStorage.getItem("order")) {
      //clear order in localStorage
      localStorage.clear("order");
    }
  } else {
    localStorage.setItem("order", JSON.stringify(order));
  }
}

function removeItemFromOrder(singleOrder) {
  //find beer in array
  const indexOfBeer = order.findIndex(
    (obj) => obj.beer.name === singleOrder.beer.name
  );
  //remove beer from array
  order.splice(indexOfBeer, 1);
}

function removeElementFromCart(e) {
  //find closest .cartPriduct element
  e.target.closest(".cartProduct").remove();
}

function openLogin() {
  document.querySelector("#modal-login").style.display = "block";
  document.getElementById("email").focus();
  // document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector("#productlist").classList.add("noScroll");
}

function closeLogin() {
  document.querySelector("#modal-login").style.display = "none";
  document.querySelector(".login-notfound").style.visibility = "hidden";

  // document.querySelector("#modal-login").style.display = "none";
  // document.querySelector(".requirements, .login-notfound").style.visibility =
  //   "hidden";
  document.getElementById("email").focus();
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
