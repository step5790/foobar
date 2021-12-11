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
    //clear previous bt
    btElement.firstElementChild.innerHTML = "";
    if (bartender.statusDetail === "pourBeer") {
      importBartenderSvg(bartender, "pouring", btElement);
      startTap(bartender);
    }
    //remove bt at bar and import at the counter
    else if (bartender.statusDetail === "receivePayment") {
      //import "back carrying svg
      importBartenderSvg(bartender, "back-carrying", destinationElement);
    } else if (bartender.statusDetail === "reserveTap") {
      //import "leaning" svg
      importBartenderSvg(bartender, "leaning", destinationElement);
    }
  };
}
