"use strict";

import { displayFrontBartender, hideBartenderAtBar } from "./change-bartender-display";
import { createBartenderAtBar } from "./create-bartender-at-bar";

export function moveBartenderToBar(bartender) {
  const tap = getTap(bartender.usingTap);
  const bt = getBartender(bartender);
  displayFrontBartender(bt.element);
  animateToBar(tap.element, tap.position, bt.element, bt.position, bartender);
}

function animateToBar(tapElement, tapPosition, btElement, btPosition, bartender) {
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
      duration: 1200,
      easing: "ease-in-out",
      fillMode: "forwards",
    }
  );
  moveBartenderAnimation.onfinish = () => {
    hideBartenderAtBar(btElement);
    createBartenderAtBar(bartender);
  };
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
