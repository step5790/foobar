import { createBeerObject, getBeerToAdd, registerCounter } from "./product-counter";
import { addToCart } from "./productCart";

export function toggleModal(beer) {
  const template = document.querySelector("#modalTemp").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".productModalHeading").textContent = beer.name;
  copy.querySelector(".modalCategoryText").textContent = beer.category;
  copy.querySelector(".modalAlcoholText").textContent = beer.alc;
  copy.querySelector(".modalPprice").textContent = `${beer.alc * 10} DKK`;
  copy.querySelector(".modalImpression").textContent = beer.description.overallImpression;
  copy.querySelector(".item-container-aroma p").textContent = beer.description.aroma;
  copy.querySelector(".item-container-appearance p").textContent = beer.description.appearance;
  copy.querySelector(".item-container-flavor p").textContent = beer.description.flavor;
  copy.querySelector(".item-container-mouthfeel p").textContent = beer.description.mouthfeel;
  copy.querySelector(".beerProductImage").src = `/assets/beer/modal-${beer.label}`;
  copy.querySelector(".beerProductImage").alt = `modal-${beer.label}`;

  copy.querySelectorAll(`button[data-button="counter"]`).forEach((button) => {
    button.addEventListener("click", (e) => registerCounter(e));
  });
  copy.querySelector(`button[data-button="addToCart"]`).addEventListener("click", () => {
    const beerToAdd = getBeerToAdd();
    //clear object
    createBeerObject(beer);
    addToCart(beerToAdd);
  });

  document.querySelector("main").appendChild(copy);

  document.querySelector(".modalCategoryHeading").scrollIntoView();

  // document.querySelector("#modal").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector("#productlist").classList.add("noScroll");
  document.querySelector(".exitModal").addEventListener("click", closeModal);

  createBeerObject(beer);

  //change content with one beer
  //loop through the beers and find the matching - index of array
  //change he content with the data from the index
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
