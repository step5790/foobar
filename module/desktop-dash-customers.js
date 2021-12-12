"use strict";

export function toggleCustomer(bartender) {
  const customerContainer = document.querySelector(`#customer-${bartender.name}`);
  if (bartender.statusDetail === "startServing") {
    customerContainer.style.visibility = "visible";
  } else {
    customerContainer.style.visibility = "hidden";
  }
}
