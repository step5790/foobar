"use strict";

export function getTap(tap) {
  const tapNumberAsString = tap.toString();
  const tapG = document.querySelector(`g#tap_${tapNumberAsString}`);
  return tapG;
}
