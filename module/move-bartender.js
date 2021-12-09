"use strict";

import { hideBartenderAtCounter, unhideBartenderAtCounter } from "./change-bartender-display";
import { createBartenderAtBar } from "./create-bartender-at-bar";

export function animateToDestination(destinationElement, destinationPosition, btElement, btPosition, bartender) {
  //calculate the movement
  const deltaX = destinationPosition.left - btPosition.left;
  const deltaY = destinationPosition.top - btPosition.top;
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
      createBartenderAtBar(bartender);
    }
    //remove bt at bar and import at another tap
    else if (bartender.statusDetail === "pourBeer") {
      console.log("remove old and create new bartender at bar");
      btElement.innerHTML = "";
      createBartenderAtBar(bartender);
    }
    //remove bt at bar and unhide at the counter
    else if (bartender.statusDetail === "receivePayment" || bartender.statusDetail === "reserveTap") {
      console.log("remove old and unhide at bar");
      console.log(btElement);
      btElement.innerHTML = "";
      unhideBartenderAtCounter(destinationElement);
    }
  };
}
