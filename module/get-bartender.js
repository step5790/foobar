"use strict";
import { displayFrontBartender } from "./change-bartender-display";
import { getTap } from "./get-tap";
import { animateToTap } from "./move-bartender-to-tap";

export function getBartenderAndTap(bartender) {
  const tap = getTap(bartender.usingTap);
  const bt = getBartender(bartender);
  displayFrontBartender(bt.element);
  animateToTap(tap.element, tap.position, bt.element, bt.position, bartender);
}

function getBartender(bartender) {
  const bartenderInDom = document.querySelector(`#${bartender.name}`);
  const bartenderPosition = bartenderInDom.getBoundingClientRect();
  return { element: bartenderInDom, position: bartenderPosition };
}
