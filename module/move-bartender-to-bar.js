"use strict";

export function moveBartenderToBar(bartender) {
  console.log(bartender);
  const tapPosition = getTap(bartender.usingTap);
  const bartenderPosition = getBartender(bartender);
  console.log("tap", tapPosition, "bartender", bartenderPosition);
}

function getTap(tap) {
  // const tapAsString = data.usingTap.toString();
  const tapNumberAsString = tap.toString();
  const tapInDom = document.querySelector(`#tap_${tapNumberAsString}`);
  const tapPosition = tapInDom.getBoundingClientRect();
  return tapPosition;
}

function getBartender(bartender) {
  const bartenderInDom = document.querySelector(`#${bartender.name}`);
  const bartenderPosition = bartenderInDom.getBoundingClientRect();
  return bartenderPosition;
  // return [bartenderInDom, bartenderPosition];
}
