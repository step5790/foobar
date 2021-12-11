"use strict";

import { loadBartenderSvg } from "./load-dashboard-svg";

export async function importBartenderSvg(bartender, display, btElementBack) {
  const btSvg = await loadBartenderSvg(bartender.name, display);
  //change svg with "bt-pouring"
  if (display === "pouring") {
    const tap = bartender.usingTap;
    const btElement = document.querySelector(`#bt-${tap}`);
    btElement.querySelector(`div[data-bt="${bartender.name}"]`).innerHTML = btSvg;
  }
  //change svg with other displays
  else {
    btElementBack.querySelector(`div[data-bt="${bartender.name}"]`).innerHTML = btSvg;
  }
}
