"use strict";
import { loadSvg } from "./load-dashboard-svg";
import { moveBartenderToBar } from "./move-bartender-to-bar";

window.addEventListener("DOMContentLoaded", start);

let bartenders = [
  {
    btName: "Klaus",
    btStatus: "waiting",
  },
  {
    btName: "Jonas",
    btStatus: "waiting",
  },
  {
    btName: "Peter",
    btStatus: "waiting",
  },
  {
    btName: "Dannie",
    btStatus: "waiting",
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

      if ((oldStatus === "startServing" || oldStatus === "waiting" || oldStatus === "reserveTap") && newStatus === "pourBeer") {
        console.log("bartender needs to go to the bar");
        moveBartenderToBar(bartender);
      } else if (oldStatus === "releaseTap" && newStatus === "pourBeer") {
        console.log("bartender needs to change a tap");
        moveBartenderToNewTap();
      } else if (oldStatus === "releaseTap" && newStatus === "receivePayment") {
        console.log("bartender needs go to to the counter");
        moveBartenderToCounter();
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

function moveBartenderToNewTap() {}

function moveBartenderToCounter() {}
