"use strict";

export function moveBartenderToBar(bartender) {
  console.log(bartender);
  const tap = getTap(bartender.usingTap);
  const bt = getBartender(bartender);
  console.log("tap", tap, "bartender", bt);
  // animateToBar(bartenderElementAndPosition[0], bartenderElementAndPosition[1], tapPosition)
}

function animateToBar() {
  //calculate the movement
  const deltaX = tapPosition.left - bartenderElementAndPosition[1].left;
  const deltaY = tapPosition.top - bartenderElementAndPosition[1].top;
  //animate movement
  const moveBartenderAnimation = bartenderElementAndPosition[0].animate(
    [
      {
        transformOrigin: "top left",
        transform: `translateX(${deltaX}px)
      translateY(${deltaY}px)`,
      },
    ],
    {
      duration: 900,
      easing: "ease-in-out",
      fillMode: "forwards",
    }
  );
}

function getTap(tap) {
  // const tapAsString = data.usingTap.toString();
  const tapNumberAsString = tap.toString();
  const tapInDom = document.querySelector(`#tap_${tapNumberAsString}`);
  const tapPosition = tapInDom.getBoundingClientRect();
  return { element: tapInDom, position: tapPosition };
}

function getBartender(bartender) {
  const bartenderInDom = document.querySelector(`#${bartender.name}`);
  const bartenderPosition = bartenderInDom.getBoundingClientRect();
  return { element: bartenderInDom, position: bartenderPosition };
}
