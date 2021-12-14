"use strict";

const order = [];

export function registerCart() {
  const cart = document.querySelector(".cartButton");
  cart.addEventListener("click", toggleCart);
}

function toggleCart() {
  document.querySelector("#cart").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector(".exitCart").addEventListener("click", closeCart);
  document.querySelector("#productlist").classList.add("noScroll");

  function closeCart() {
    document.querySelector("#cart").classList.add("hidden");
    document.querySelector("#pageMask").classList.add("hidden");
    document.querySelector("#productlist").classList.remove("noScroll");
  }
}

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
  //display cart items
  order.forEach((obj) => {
    displayCartItem(obj);
  });
}

/* <div class="cartProduct">
        <img class="cartProductImage" src="assets/beer/hollaback.png" alt="Hollaback Lager" />
        <div class="cartNameAmount">
          <p class="cartName">Hollaback Lager</p>
          <div class="adjustAmount">
            <img class="modalMinus" src="assets/icons/minus.svg" />
            <p class="beerQuantity">1</p>
            <img class="modalPlus" src="assets/icons/plus.svg" />
          </div>
        </div>
        <p class="cartPrice">40 DKK</p>
        <button class="modalRemoveCart"></button>
      </div> */

function displayCartItem(obj) {
  console.log(obj);
  const template = document.querySelector("#cartTemp").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".cartProductImage").src = `assets/beer/${obj.beer.label}`;
  copy.querySelector(".cartProductImage").alt = obj.beer.label;
  copy.querySelector(".cartName").textContent = obj.beer.label;
  const parent = document.querySelector(".cartItems");
  parent.appendChild(copy);
}
