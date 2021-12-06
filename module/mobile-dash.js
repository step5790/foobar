"use strict";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  const url = "https://hangover3.herokuapp.com/";

  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      prepareAllData(jsonData);
    });
}

function prepareAllData(jsonData) {
  console.log(jsonData);

  displayQues(jsonData);
  displayTapLevels(jsonData);
  displayKegInventory(jsonData);
  displayBartenders(jsonData);
}

function displayQues(queData) {
  console.log(queData.queue);

  if (queData.queue.at(-1)) {
    console.log("Ques:" + queData.queue.length);
    console.log(queData.queue.at(-1).id);
  }
}

function displayTapLevels(tapData) {
  console.log(tapData.taps);
  const allTap = tapData.taps;

  allTap.forEach((element) => {
    console.log(element.beer + ": " + element.level);
  });
}

function displayKegInventory(kegData) {
  console.log(kegData.storage);
  const allKeg = kegData.storage;

  allKeg.forEach((element) => {
    console.log(element.name + ": " + element.amount);
  });
}

function displayBartenders(bartenderData) {
  console.log(bartenderData.bartenders);

  const allBartender = bartenderData.bartenders;

  allBartender.forEach((element) => {
    console.log(
      element.name +
        " " +
        "Status: " +
        element.statusDetail +
        " " +
        "| Serving customer: " +
        element.servingCustomer
    );
  });
}

// *****for graph*****
