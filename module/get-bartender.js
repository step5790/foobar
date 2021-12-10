"use strict";

export function getBartenderAtCounter(bartender) {
  console.log("get bartender at COUNTER");
  const bartenderInDom = document.querySelector(`div#${bartender.name}`);
  const bartenderPosition = bartenderInDom.getBoundingClientRect();
  return { element: bartenderInDom, position: bartenderPosition };
}

export function getBartenderAtBar(bartender) {
  console.log("get bartender at BAR");
  const bartenderInDom = document.querySelector(`g#${bartender.name}_pouring`).closest("div.bt-pouring");
  const bartenderPosition = bartenderInDom.getBoundingClientRect();
  return { element: bartenderInDom, position: bartenderPosition };
}
