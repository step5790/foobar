"use strict";

import { loadCustomerSvg } from "./load-dashboard-svg";

export async function toggleCustomer(bartender) {
  const customerContainer = document.querySelector(`#customer-${bartender.name}`);
  if (bartender.statusDetail !== "waiting") {
    const customerSvg = await loadCustomerSvg(bartender.name);
    customerContainer.innerHTML = customerSvg;
    customerContainer.style.visibility = "visible";
  } else {
    customerContainer.innerHTML = "";
    customerContainer.style.visibility = "hidden";
  }
}
