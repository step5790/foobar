"use strict";

import { getBartenderAtBar } from "./get-bartender";
import { animateToDestination } from "./move-bartender";
import { importBartenderSvg } from "./import-bartender-svg";

export function moveBartenderToCounter(bartender) {
  //get bt in DOM
  const bt = getBartenderAtBar(bartender);
  //get right place at counter
  const spotAtCounter = getBartenderSpotAtCounter(bartender);
  importBartenderSvg(bartender, bt.element);
  animateToDestination(spotAtCounter.element, spotAtCounter.position, bt.element, bt.position, bartender);

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
