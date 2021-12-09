"use strict";

import { loadBartenderSvg } from "./load-dashboard-svg";

export async function createBartenderAtBar(bartender) {
  const tap = bartender.usingTap;
  const btElement = document.querySelector(`#bt-${tap}`);
  const btSvg = await loadBartenderSvg(bartender.name, "pouring");
  btElement.innerHTML = btSvg;
}
