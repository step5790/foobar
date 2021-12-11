"use strict";
import { loadSvg } from "./load-dashboard-svg";
import { getBartenderAndTap } from "./bartender-to-bar";
import { moveBartenderToCounter } from "./bartender-to-counter";
import { getBartenderSpotAtCounter } from "./get-bartender";
import { importBartenderSvg } from "./import-bartender-svg";
import { startTap, removePreviousTap } from "./get-tap";

window.addEventListener("DOMContentLoaded", start);

let bartenders = [
  {
    btName: "Klaus",
    btStatus: "",
  },
  {
    btName: "Jonas",
    btStatus: "",
  },
  {
    btName: "Peter",
    btStatus: "",
  },
  {
    btName: "Dannie",
    btStatus: "",
  },
];

async function start() {
  console.log("start");
  await loadSvg();
  loadDynamicData();
}

function loadDynamicData() {
  const url = "https://hangover3.herokuapp.com/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => getData(data));
  setTimeout(loadDynamicData, 1000);
}

function getData(data) {
  const bartendersData = data.bartenders;
  // bartendersData.forEach((bartender) => {
  //   getBartenderStatus(bartender);
  // });
  showBartender(bartendersData[1]);
  getBartenderStatus(bartendersData[1]);
}

function getBartenderStatus(bartender) {
  const bartenderName = bartender.name;
  const newStatus = bartender.statusDetail;
  //match bartender in global variable
  bartenders.forEach((bt) => {
    if (bt.btName === bartenderName) {
      const oldStatus = bt.btStatus;
      const btSpotAtCounter = getBartenderSpotAtCounter(bartender);
      console.log(bt.btName, "old Status:", oldStatus);
      if (oldStatus === "") {
        console.log("there is no oldStatus yet");
        //import bt based on the newStatus only
        if (newStatus === "waiting" || newStatus === "reserveTap" || newStatus === "replaceKeg" || newStatus === "receivePayment") {
          importBartenderSvg(bartender, "leaning", btSpotAtCounter.element);
          bt.btStatus = newStatus;
        } else if (newStatus === "startServing") {
          importBartenderSvg(bartender, "start-serving", btSpotAtCounter.element);
        } else if (newStatus === "pourBeer") {
          importBartenderSvg(bartender, "pouring");
          startTap(bartender);
          //TODO:
          //get tap element
          //unhide beer glass g
          //start pouring animation

          bt.btStatus = newStatus;
        } else if (newStatus === "releaseTap") {
          importBartenderSvg(bartender, "leaning", btSpotAtCounter.element);
          // TODO:
          //get tap element
          //hide tap if newStatus === "releaseTap"

          //cheat the system
          bt.btStatus = "";
        }
        //TODO: if newStatus === "replaceKeg"
      } else {
        if ((oldStatus === "startServing" || oldStatus === "waiting" || oldStatus === "reserveTap") && newStatus === "pourBeer") {
          console.log("move bartender to bar");
          getBartenderAndTap(bartender, "first");
        } else if (oldStatus === "pourBeer" && newStatus === "releaseTap") {
          //TODO stop tap "pouring"
        }
        //backup if releaseTap is not registered
        else if (oldStatus === "pourBeer" && newStatus === "receivePayment") {
          removePreviousTap(bartender);
          moveBartenderToCounter(bartender);
        } else if (oldStatus === "startServing" && newStatus === "reserveTap") {
          //change display to "bt-leaning"
          importBartenderSvg(bartender, "leaning", btSpotAtCounter.element.firstElementChild);
        } else if (newStatus === "startServing") {
          importBartenderSvg(bartender, "start-serving", btSpotAtCounter.element.firstElementChild);
        } else if (oldStatus === "releaseTap") {
          removePreviousTap(bartender);
          if (newStatus === "pourBeer") {
            getBartenderAndTap(bartender, "not first");
          } else {
            moveBartenderToCounter(bartender);
          }
          //TODO: if newStatus === "replaceKeg"
        }
        //TODO: if oldStatus === "replaceKeg" && newStatus === "pourBeer"
        bt.btStatus = newStatus;
      }
      console.log(bt.btName, "new Status:", bt.btStatus);
    }
  });
}

function showBartender(data) {
  //change data in table
  const nameCol = document.querySelector("td[data-bartender=name]");
  nameCol.textContent = data.name;
  const statusDetCol = document.querySelector("td[data-bartender=statusDetail]");
  statusDetCol.textContent = data.statusDetail;
  const tapCol = document.querySelector(`td[data-bartender=usingTap]`);
  tapCol.textContent = data.usingTap;
}
