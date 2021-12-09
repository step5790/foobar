"use strict";

import { loadBartenderSvg } from "./load-dashboard-svg";

export async function importBartenderSvg(bartender, display, btElementBack) {
  const tap = bartender.usingTap;
  const btElement = document.querySelector(`#bt-${tap}`);
  const btSvg = await loadBartenderSvg(bartender.name, display);
  //change svg with "bt-pouring"
  if (display === "pouring") {
    btElement.firstElementChild.innerHTML = btSvg;
  }
  //change svg with "bt-back-carrying"
  else if (display === "back-carrying" || display === "leaning") {
    btElementBack.innerHTML = btSvg;
  }
}
