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

export function handleTap(bartender) {
  //get tap element
  const tap = getTap(bartender.usingTap);

  //change usingTap status
  bartendersTaps.forEach((bt) => {
    if (bt.btName === bartender.name) {
      console.log(bartender.name, " is using tap", tap);
      if (bt.usingTap !== "") {
        //remove previus tap
        removePreviousTap(bt.usingTap);
      }
      bt.usingTap = tap;
      //unhide beer glass g
      tap.querySelector(".beer_front").style.visibility = "visible";
    }
  });

  console.log(bartendersTaps);
  //start pouring animation
  //hide tap if newStatus === "releaseTap"
}

function removePreviousTap(tap) {
  console.log("remove", tap);
  tap.querySelector(".beer_front").style.visibility = "hidden";
}
