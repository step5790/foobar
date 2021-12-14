"use strict";
// import { getBartenderSpotAtBar } from "./get-tap";
import { getBartenderSpotAtCounter, getBartenderAtBar, getBartenderSpotAtBar } from "./get-bartender";
import { importBartenderSvg } from "./import-bartender-svg";
import { animateToDestination } from "./move-bartender";

export function getBartenderAndTap(bartender, firstTap) {
  const tap = getBartenderSpotAtBar(bartender.usingTap);

  if (firstTap === "first") {
    //move bt to bar from counter
    const bt = getBartenderSpotAtCounter(bartender);
    importBartenderSvg(bartender, "front", bt.element);
    animateToDestination(tap.element, tap.position, bt.element, bt.position, bartender);
  } else {
    //get btElement and position
    const bt = getBartenderAtBar(bartender);
    //change display to "bt changing tap"
    importBartenderSvg(bartender, "changing-tap", bt.element);
    //move bartender to new tap from previous tap
    animateToDestination(tap.element, tap.position, bt.element, bt.position, bartender);
  }
}
