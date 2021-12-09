"use strict";

import { loadBartenderSvg } from "./load-dashboard-svg";

export async function importBartenderSvg(bartender, btElementBack) {
  const tap = bartender.usingTap;
  const btElement = document.querySelector(`#bt-${tap}`);
  //change svg with "bt-pouring"
  if (bartender.statusDetail === "pourBeer") {
    const btSvg = await loadBartenderSvg(bartender.name, "pouring");
    btElement.innerHTML = btSvg;
  }
  //change svg with "bt-back-carrying"
  else if (bartender.statusDetail === "receivePayment") {
    const btSvg = await loadBartenderSvg(bartender.name, "back-carrying");
    btElementBack.innerHTML = btSvg;
  }
}
