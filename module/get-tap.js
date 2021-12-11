"use strict";

let bartendersTaps = [
  {
    btName: "Klaus",
    usingTap: "",
  },
  {
    btName: "Jonas",
    usingTap: "",
  },
  {
    btName: "Peter",
    usingTap: "",
  },
  {
    btName: "Dannie",
    usingTap: "",
  },
];

export function getTap(tap) {
  const tapNumberAsString = tap.toString();
  const tapG = document.querySelector(`g#tap_${tapNumberAsString}`);
  return tapG;
}

export function startTap(bartender) {
  //get tap element
  const tap = getTap(bartender.usingTap);

  //change usingTap status
  bartendersTaps.forEach((bt) => {
    if (bt.btName === bartender.name) {
      bt.usingTap = tap;
      //unhide beer glass g
      tap.querySelector(".beer_front").style.visibility = "visible";
    }
  });
  console.log(bartendersTaps);
  //start pouring animation
  //hide tap if newStatus === "releaseTap"
}

export function removePreviousTap(bartender) {
  bartendersTaps.forEach((bt) => {
    if (bt.btName === bartender.name) {
      if (bt.usingTap !== "") {
        bt.usingTap.querySelector(".beer_front").style.visibility = "hidden";
        bt.usingTap = "";
      } else {
        console.log(bartender.name, " hasn't used a tap yet");
      }
    }
  });
}
