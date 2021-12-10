"use strict";

export function getTap(tap) {
  const tapNumberAsString = tap.toString();
  const tapG = document.querySelector(`g#tap_${tapNumberAsString}`);
  return tapG;
}

export function handleTap(bartender) {
  //get tap element
  const tap = getTap(bartender.usingTap);
  console.log(tap);
  //unhide beer glass g
  tap.querySelector(".beer_front").style.visibility = "visible";

  //start pouring animation
  //hide tap if newStatus === "releaseTap"
}
