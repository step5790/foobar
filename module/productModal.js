export function toggleModal(beersData) {
  //console.log(this.dataset.name);
  document.querySelector(".modalCategoryHeading").scrollIntoView();

  document.querySelector("#modal").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector("#productlist").classList.add("noScroll");
  document.querySelector(".exitModal").addEventListener("click", closeModal);

  // changeBeerData(beersData);

  //to do
  console.log(beersData);
  document.querySelector(".productModalHeading").textContent = beersData.name;
  document.querySelector(".modalCategoryText").textContent = beersData.category;
  document.querySelector(".modalAlcoholText").textContent = beersData.alc;
  document.querySelector(".modalPprice").textContent = `${
    beersData.alc * 10
  } DKK`;
  document.querySelector(".modalImpression").textContent =
    beersData.description.overallImpression;
  document.querySelector(".item-container-aroma p").textContent =
    beersData.description.aroma;
  document.querySelector(".item-container-appearance p").textContent =
    beersData.description.appearance;
  document.querySelector(".item-container-flavor p").textContent =
    beersData.description.flavor;
  document.querySelector(".item-container-mouthfeel p").textContent =
    beersData.description.mouthfeel;

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

function changeBeerData(beersData) {
  console.log(beersData);
  //document.querySelector(".productModalHeading").textContent = beersData[0].name;

  //console.log(beersData[0].name);

  beersData.forEach((beer) => {
    console.log(beer.name);
    /* if (beer.name === this.dataset.name) {
      console.log("found it");
    } */
  });
}
