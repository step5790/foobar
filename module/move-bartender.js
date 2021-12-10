"use strict";

import { importBartenderSvg } from "./import-bartender-svg";
import { startTap } from "./get-tap";

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
    //remove previous bt and import at next tap
    if (bartender.statusDetail === "pourBeer") {
      btElement.firstElementChild.innerHTML = "";
      importBartenderSvg(bartender, "pouring", btElement);
      startTap(bartender);
    }
    //remove bt at bar and import at the counter
    else if (bartender.statusDetail === "receivePayment" || bartender.statusDetail === "reserveTap") {
      btElement.firstElementChild.innerHTML = "";
      //import svg
      importBartenderSvg(bartender, "back-carrying", destinationElement);
    }
  };
}
