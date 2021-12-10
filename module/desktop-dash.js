"use strict";
import { loadSvg } from "./load-dashboard-svg";
import { getBartenderAndTap } from "./bartender-to-bar";
import { moveBartenderToCounter } from "./bartender-to-counter";
import { getBartenderAtCounter, getBartenderSpotAtCounter } from "./get-bartender";
import { importBartenderSvg } from "./import-bartender-svg";

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

      console.log(bt.btName, "old Status:", oldStatus);
      if (oldStatus === "") {
        console.log("there is no oldStatus yet");
        //import bt based on the newStatus only
        if (newStatus === "waiting" || newStatus === "reserveTap" || newStatus === "replaceKeg" || newStatus === "startServing" || newStatus === "receivePayment") {
          const btAtCounter = getBartenderAtCounter(bartender);
          importBartenderSvg(bartender, "leaning", btAtCounter.element.firstElementChild);
          bt.btStatus = newStatus;
        } else if (newStatus === "pourBeer") {
          // const btAtBar = getTap(bartender.usingTap);
          importBartenderSvg(bartender, "pouring");
          bt.btStatus = newStatus;
        } else if (newStatus === "releaseTap") {
          //create bt at a
          const btSpotAtCounter = getBartenderSpotAtCounter(bartender);
          importBartenderSvg(bartender, "leaning", btSpotAtCounter.element.firstElementChild);
          //cheat the system
          bt.btStatus = "";
        }
      } else {
        if ((oldStatus === "startServing" || oldStatus === "waiting" || oldStatus === "reserveTap") && newStatus === "pourBeer") {
          getBartenderAndTap(bartender, "first");
        } else if (oldStatus === "pourBeer" && newStatus === "releaseTap") {
          console.log("tap should stop pouring");
        } else if (oldStatus === "releaseTap" && newStatus === "pourBeer") {
          getBartenderAndTap(bartender, "not first");
        } else if (oldStatus === "releaseTap" && newStatus === "reserveTap") {
          console.log("bartender needs to move to counter to wait for next tap");
          moveBartenderToCounter(bartender);
        } else if (oldStatus === "releaseTap" && newStatus === "receivePayment") {
          console.log("bartender needs go to to the counter to receive payment");
          moveBartenderToCounter(bartender);
        }
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
