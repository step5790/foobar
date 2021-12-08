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
    hideBartenderAtCounter(btElement);
    createBartenderAtBar(bartender);
  };
}
