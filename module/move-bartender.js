"use strict";

import { importBartenderSvg } from "./import-bartender-svg";

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
    //hide bt at counter and import at tap
    if (btElement.className === "bt-at-counter") {
      btElement.firstElementChild.innerHTML = "";
      importBartenderSvg(bartender, "pouring", btElement);
    }
    //remove bt at bar and import at another tap
    else if (bartender.statusDetail === "pourBeer") {
      console.log("remove old and create new bartender at bar");
      btElement.firstElementChild.innerHTML = "";
      importBartenderSvg(bartender, "pouring", btElement);
    }
    //remove bt at bar and unhide at the counter
    else if (bartender.statusDetail === "receivePayment" || bartender.statusDetail === "reserveTap") {
      console.log("remove old and unhide at bar");
      btElement.firstElementChild.innerHTML = "";
      //import svg
      importBartenderSvg(bartender, "back-carrying", destinationElement);
    }
  };
}
