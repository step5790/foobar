"use strict";

export function changeBartenderDisplay(bartender) {
  console.log(bartender);
  document.querySelector(`#${bartender.name} div.leaning`).classList.add("hidden");
  document.querySelector(`#${bartender.name} div.front`).classList.remove("hidden");
}
