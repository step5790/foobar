"use strict";

import { hideBartenderAtCounter } from "./change-bartender-display";
import { createBartenderAtBar } from "./create-bartender-at-bar";

export function animateToTap(tapElement, tapPosition, btElement, btPosition, bartender) {
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
    //hide bt at counter
    if (btElement.className === "bt-at-counter") {
      hideBartenderAtCounter(btElement);
    }
    //remove bt at bar
    else {
      console.log("bartender at bar:", btElement);
      btElement.innerHTML = "";
    }
    createBartenderAtBar(bartender);
  };
}
