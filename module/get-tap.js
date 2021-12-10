"use strict";

export function getTap(tap) {
  const tapNumberAsString = tap.toString();
  const tapInDom = document.querySelector(`.bt-pouring#bt-${tapNumberAsString}`);
  const tapPosition = tapInDom.getBoundingClientRect();
  return { element: tapInDom, position: tapPosition };
}
