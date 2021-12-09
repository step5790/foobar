"use strict";

import { getBartenderAtBar } from "./get-bartender";
import { animateToDestination } from "./move-bartender";
export function moveBartenderToCounter(bartender) {
  //get bt in DOM
  const bt = getBartenderAtBar(bartender);
  //get right place at counter
  const spotAtCounter = getBartenderSpotAtCounter(bartender);
  console.log(spotAtCounter);
  //   moveBartenderToCounter();
  //change display to "bt back carrying"

  //move bt to it's right place at counter
  //remove bt element from bar
  //unhide bt at bar
  //change bt-at-bar display to bt "bt back carrying"
}

function getBartenderSpotAtCounter(bartender) {
  const counterContainerInDom = document.querySelector(`div#${bartender.name}`);
  const counterPosition = counterContainerInDom.getBoundingClientRect();
  return { element: counterContainerInDom, position: counterPosition };
}
