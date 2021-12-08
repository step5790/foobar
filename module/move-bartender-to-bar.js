"use strict";

import { changeBartenderDisplay } from "./change-bartender-display";

export function moveBartenderToBar(bartender) {
  const tap = getTap(bartender.usingTap);
  const bt = getBartender(bartender);
  changeBartenderDisplay(bartender);
  animateToBar(tap.element, tap.position, bt.element, bt.position);
}

function animateToBar(tapElement, tapPosition, btElement, btPosition) {
  //calculate the movement
  const deltaX = tapPosition.left - btPosition.left;
  const deltaY = tapPosition.top - btPosition.top;
  //animate movement
  const moveBartenderAnimation = btElement.animate(
    [
      {
        transformOrigin: "top left",
        transform: `translateX(${deltaX}px)
      translateY(${deltaY}px)`,
      },
    ],
    {
      duration: 900,
      easing: "ease-in-out",
      fillMode: "forwards",
    }
  );
}

function getTap(tap) {
  // const tapAsString = data.usingTap.toString();
  const tapNumberAsString = tap.toString();
  const tapInDom = document.querySelector(`#tap_${tapNumberAsString}`);
  const tapPosition = tapInDom.getBoundingClientRect();
  return { element: tapInDom, position: tapPosition };
}

function getBartender(bartender) {
  const bartenderInDom = document.querySelector(`#${bartender.name}`);
  const bartenderPosition = bartenderInDom.getBoundingClientRect();
  return { element: bartenderInDom, position: bartenderPosition };
}
