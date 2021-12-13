export function toggleModal(beersData) {
  //console.log(this.dataset.name);
  document.querySelector("#modal").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector("#productlist").classList.add("noScroll");
  document.querySelector(".exitModal").addEventListener("click", closeModal);

  changeBeerData(beersData);
  //to do

  //change content with one beer
  //loop through the beers and find the matching - index of array
  //change he content with the data from the index

  function closeModal() {
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
    //console.log(beer.name);
    if (beer.name === this.dataset.name) {
      console.log("found it");
    }
  });
}
