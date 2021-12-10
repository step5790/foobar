"use strict";

import { getBartenderAtBar, getBartenderSpotAtCounter } from "./get-bartender";
import { animateToDestination } from "./move-bartender";
import { importBartenderSvg } from "./import-bartender-svg";

export function moveBartenderToCounter(bartender) {
  //get bt in DOM
  const bt = getBartenderAtBar(bartender);
  //get right place at counter
  const spotAtCounter = getBartenderSpotAtCounter(bartender);
  //change bt-at-bar display to bt "bt back carrying"
  importBartenderSvg(bartender, "back-carrying", bt.element);
  //move bt to it's right place at counter
  animateToDestination(spotAtCounter.element, spotAtCounter.position, bt.element, bt.position, bartender);
}
