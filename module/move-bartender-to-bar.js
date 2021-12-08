"use strict";

export function moveBartenderToBar(bartender) {
  console.log(bartender);
  getTap(bartender.usingTap);
}

function getTap(tap) {
  // const tapAsString = data.usingTap.toString();
  const tapNumberAsString = tap.toString();
  const tapInDom = document.querySelector(`#tap_${tapNumberAsString}`);
  console.log(tapInDom);
  // const tapPosition = tapInDom.getBoundingClientRect();
  // return [tapInDom, tapPosition];
}
