"use strict";

export function getBartenderAtCounter(bartender) {
  const bartenderInDom = document.querySelector(`div#${bartender.name}`);
  const bartenderPosition = bartenderInDom.getBoundingClientRect();
  return { element: bartenderInDom, position: bartenderPosition };
}

export function getBartenderAtBar(bartender) {
  if (document.querySelector(`g#${bartender.name}_pouring`).closest("div.bt-pouring") === null) {
    console.log("bartender hasn't been created at counter yet");
    getBartenderAtCounter(bartender);
  } else {
    const bartenderInDom = document.querySelector(`g#${bartender.name}_pouring`).closest("div.bt-pouring");
    const bartenderPosition = bartenderInDom.getBoundingClientRect();
    return { element: bartenderInDom, position: bartenderPosition };
  }
}
