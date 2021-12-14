import { createBeerObject, displayQuantity, registerCounter } from "./product-counter";

export function toggleModal(beer) {
  //console.log(this.dataset.name);
  document.querySelector(".modalCategoryHeading").scrollIntoView();

  document.querySelector("#modal").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector("#productlist").classList.add("noScroll");
  document.querySelector(".exitModal").addEventListener("click", closeModal);

  // changeBeerData(beersData);

  createBeerObject(beer.name);
  displayQuantity();
  registerCounterClick(beer.name);

  //to do
  console.log(beer);
  document.querySelector(".productModalHeading").textContent = beer.name;
  document.querySelector(".modalCategoryText").textContent = beer.category;
  document.querySelector(".modalAlcoholText").textContent = beer.alc;
  document.querySelector(".modalPprice").textContent = `${beer.alc * 10} DKK`;
  document.querySelector(".modalImpression").textContent = beer.description.overallImpression;
  document.querySelector(".item-container-aroma p").textContent = beer.description.aroma;
  document.querySelector(".item-container-appearance p").textContent = beer.description.appearance;
  document.querySelector(".item-container-flavor p").textContent = beer.description.flavor;
  document.querySelector(".item-container-mouthfeel p").textContent = beer.description.mouthfeel;
  document.querySelector(".beerProductImage").src = `assets/beer/modal-${beer.label}`;
  document.querySelector(".beerProductImage").alt = `modal-${beer.label}`;

  //change content with one beer
  //loop through the beers and find the matching - index of array
  //change he content with the data from the index

  function closeModal() {
    var x, i;
    x = document.querySelectorAll(".beer-component .content");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    document.querySelector("#modal").classList.add("hidden");
    document.querySelector("#pageMask").classList.add("hidden");
    document.querySelector("#productlist").classList.remove("noScroll");
  }
}

function changeBeerData(beer) {
  console.log(beer);
  //document.querySelector(".productModalHeading").textContent = beer[0].name;

  //console.log(beer[0].name);

  beer.forEach((beer) => {
    console.log(beer.name);
    /* if (beer.name === this.dataset.name) {
      console.log("found it");
    } */
  });
}

function registerCounterClick(beer) {
  document.querySelectorAll(`button[data-button="counter"]`).forEach((button) => {
    button.addEventListener("click", (e) => registerCounter(beer, e));
  });
}
