("use strict");

import { displayQues } from "./displayQues";
import { displayTapLevels } from "./displayTapLevels";
import { displayKegInventory } from "./displayKegInventory";
import { displayBartenders } from "./displayBartenders";
import { displaySales } from "./displaySales";
import { collapsible } from "./mobile-data-collapsible";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  const url = "https://hangover3.herokuapp.com/";

  // console.clear();

  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      prepareAllData(jsonData);
      setTimeout(init, 3000);
    });
}

function prepareAllData(jsonData) {
  console.log(jsonData);

  displayQues(jsonData);
  displayTapLevels(jsonData);
  displayKegInventory(jsonData);
  displayBartenders(jsonData);
  displaySales(jsonData);
  collapsible();
}

if (window.matchMedia("(max-device-width: 414px)").matches) {
  document.querySelector(".dash-container").style.display = "block";
} else {
  document.querySelector(".dash-container").style.display = "none";
}
