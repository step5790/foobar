"use strict";

import { getCustomerSvgs } from "./desktop-dash";

let customers = [];

let bartenderCustomers = [
  {
    btName: "Klaus",
    customer: "",
  },
  {
    btName: "Jonas",
    customer: "",
  },
  {
    btName: "Peter",
    customer: "",
  },
  {
    btName: "Dannie",
    customer: "",
  },
];

export async function toggleCustomer(bartender) {
  const customerContainer = document.querySelector(`#customer-${bartender.name}`);
  if (bartender.statusDetail !== "waiting") {
    //get initial svgs and add to array
    if (customers.length === 0) {
      customers = getCustomerSvgs();
    }
    //get random customer from array
    const randomNumber = getRandomInt(customers.length);
    customerContainer.innerHTML = customers[randomNumber];
    customerContainer.style.visibility = "visible";
  } else {
    customerContainer.innerHTML = "";
    customerContainer.style.visibility = "hidden";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
