"use strict";
import { calculateBasePrice } from "./beer-price";
import {
  createBeerObject,
  getBeerToAdd,
  registerCounter,
} from "./product-counter";
import { addToCart } from "./productCart";
import { collapsible } from "./collapsible";

export function toggleModal(beer) {
  const template = document.querySelector("#modalTemp").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".productModalHeading").textContent = beer.name;
  copy.querySelector(".modalCategoryText").textContent = beer.category;
  copy.querySelector(".modalAlcoholText").textContent = beer.alc;
  copy.querySelector(".modalPprice").textContent = `${calculateBasePrice(
    beer.alc
  )} DKK`;
  copy.querySelector(".modalImpression").textContent =
    beer.description.overallImpression;
  copy.querySelector(".item-container-aroma p").textContent =
    beer.description.aroma;
  copy.querySelector(".item-container-appearance p").textContent =
    beer.description.appearance;
  copy.querySelector(".item-container-flavor p").textContent =
    beer.description.flavor;
  copy.querySelector(".item-container-mouthfeel p").textContent =
    beer.description.mouthfeel;
  copy.querySelector(
    ".beerProductImage"
  ).src = `/assets/beer/modal-${beer.label}`;
  copy.querySelector(".beerProductImage").alt = `modal-${beer.label}`;

  copy.querySelectorAll(`button[data-button="counter"]`).forEach((button) => {
    button.addEventListener("click", (e) => registerCounter(e));
  });
  copy
    .querySelector(`button[data-button="addToCart"]`)
    .addEventListener("click", () => {
      const beerToAdd = getBeerToAdd();
      //clear object
      createBeerObject(beer);
      addToCart(beerToAdd);
      displayOrderFeedback(beerToAdd.quantity);
    });

  document.querySelector("main").appendChild(copy);

  document.querySelector(".modalCategoryHeading").scrollIntoView();

  // document.querySelector("#modal").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector("#productlist").classList.add("noScroll");
  document.querySelector(".exitModal").addEventListener("click", closeModal);
  document.querySelector("#pageMask").addEventListener("click", closeModal);

  createBeerObject(beer);

  //change content with one beer
  //loop through the beers and find the matching - index of array
  //change he content with the data from the index

  collapsible();
}

function closeModal() {
  var x, i;
  x = document.querySelectorAll(".beer-component .content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  document.querySelector("#modal").remove();
  document.querySelector("#pageMask").classList.add("hidden");
  document.querySelector("#productlist").classList.remove("noScroll");
}

function displayOrderFeedback(quantity) {
  const pElement = document.querySelector(".addToCartFeedback");
  if (quantity === 1) {
    pElement.textContent = `You added ${quantity} item in the cart.`;
  } else {
    pElement.textContent = `You added ${quantity} items in the cart.`;
  }

  pElement.classList.remove("hidden");
}
