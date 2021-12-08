"use strict";

export function displayFrontBartender(btElement) {
  btElement.querySelector(`div.leaning`).classList.add("hidden");
  btElement.querySelector(`div.front`).classList.remove("hidden");
}

export function hideBartenderAtCounter(btElement) {
  btElement.classList.add("hidden");
}
