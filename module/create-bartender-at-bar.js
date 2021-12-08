"use strict";

import { loadBartenderAtBar } from "./load-dashboard-svg";

export async function createBartenderAtBar(bartender) {
  const tap = bartender.usingTap;
  const btElement = document.querySelector(`#bt-${tap}`);
  const btSvg = await loadBartenderAtBar(bartender.name);
  btElement.innerHTML = btSvg;
}
