"use strict";

export function getBartenderAtBar(bartender) {
  console.log("get bartender at BAR");
  const bartenderInDom = document.querySelector(`g#${bartender.name}_pouring`).closest("div.bt-pouring");
  const bartenderPosition = bartenderInDom.getBoundingClientRect();
  return { element: bartenderInDom, position: bartenderPosition };
}

export function getBartenderSpotAtCounter(bartender) {
  console.log("get bartender spot at COUNTER");
  const counterContainerInDom = document.querySelector(`div#${bartender.name}`);
  const counterPosition = counterContainerInDom.getBoundingClientRect();
  return { element: counterContainerInDom, position: counterPosition };
}
