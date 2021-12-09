"use strict";
import { loadSvg } from "./load-dashboard-svg";
import { getBartenderAndTap } from "./bartender-to-bar";
import { moveBartenderToCounter } from "./bartender-to-counter";
import { getBartenderAtCounter } from "./get-bartender";
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
  getBartenderStatus(bartendersData[1]);
  showBartender(bartendersData[1]);
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
        console.log("there is no status yet");
        //import bt based on the newStatus only
        if (newStatus === "waiting" || newStatus === "reserveTap" || newStatus === "change") {
          const bt = getBartenderAtCounter(bartender);
          console.log(bt.element.firstElementChild);
          importBartenderSvg(bartender, bt.element.firstElementChild);
        }
      } else {
        if ((oldStatus === "startServing" || oldStatus === "waiting" || oldStatus === "reserveTap") && newStatus === "pourBeer") {
          getBartenderAndTap(bartender, "first");
        } else if (oldStatus === "pourBeer" && newStatus === "releaseTap") {
          console.log("tap should stop pouring");
        } else if (oldStatus === "releaseTap" && newStatus === "pourBeer") {
          getBartenderAndTap(bartender, "not first");
        } else if (oldStatus === "releaseTap" && newStatus === "reserveTap") {
          console.log("bartender needs to move to counter, and then, be removed from the previous tap");
        } else if (oldStatus === "releaseTap" && newStatus === "receivePayment") {
          console.log("bartender needs go to to the counter");
          moveBartenderToCounter(bartender);
        }
      }
      bt.btStatus = newStatus;
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
