"use strict";
import { loadSvg, loadCustomerSvgs } from "./load-dashboard-svg";
import { getBartenderAndTap } from "./bartender-to-bar";
import { moveBartenderToCounter } from "./bartender-to-counter";
import { getBartenderSpotAtCounter } from "./get-bartender";
import { importBartenderSvg } from "./import-bartender-svg";
import { startTap, removePreviousTap } from "./get-tap";
import { toggleCustomer } from "./desktop-dash-customers.js";

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

let customerSvgs = [];

async function start() {
  console.log("start");
  await loadSvg();
  customerSvgs = await loadCustomerSvgs();
  loadDynamicData();
}

export function getCustomerSvgs() {
  return customerSvgs;
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
  bartendersData.forEach((bartender) => {
    getBartenderStatus(bartender);
    showBartenderData(bartender);
  });
}

function getBartenderStatus(bartender) {
  //match bartender in global variable
  bartenders.forEach((bt) => {
    if (bt.btName === bartender.name) {
      // const bt.btStatus = bt.btStatus;
      const btSpotAtCounter = getBartenderSpotAtCounter(bartender);
      console.log(bt.btName, "old Status:", bt.btStatus);
      if (bt.btStatus === "") {
        console.log("there is no bt.btStatus yet");
        //import bt based on the bartender.statusDetail only
        if (bartender.statusDetail === "reserveTap" || bartender.statusDetail === "replaceKeg" || bartender.statusDetail === "receivePayment") {
          importBartenderSvg(bartender, "leaning", btSpotAtCounter.element);
          toggleCustomer(bartender);
          bt.btStatus = bartender.statusDetail;
        } else if (bartender.statusDetail === "startServing") {
          importBartenderSvg(bartender, "start-serving", btSpotAtCounter.element);
          toggleCustomer(bartender);
          bt.btStatus = bartender.statusDetail;
        } else if (bartender.statusDetail === "pourBeer") {
          importBartenderSvg(bartender, "pouring");
          toggleCustomer(bartender);
          startTap(bartender);
          //TODO:
          //get tap element
          //unhide beer glass g
          //start pouring animation

          bt.btStatus = bartender.statusDetail;
        } else if (bartender.statusDetail === "releaseTap") {
          importBartenderSvg(bartender, "leaning", btSpotAtCounter.element);
          // TODO:
          //get tap element
          //hide tap if bartender.statusDetail === "releaseTap"

          //cheat the system
          bt.btStatus = "";
        } else if (bartender.statusDetail === "waiting") {
          importBartenderSvg(bartender, "leaning", btSpotAtCounter.element);
          bt.btStatus = bartender.statusDetail;
        }
        //TODO: if bartender.statusDetail === "replaceKeg"
      } else {
        if ((bt.btStatus === "startServing" || bt.btStatus === "waiting" || bt.btStatus === "reserveTap") && bartender.statusDetail === "pourBeer") {
          bt.btStatus = bartender.statusDetail;
          getBartenderAndTap(bartender, "first");
        } else if (bt.btStatus === "pourBeer" && bartender.statusDetail === "releaseTap") {
          bt.btStatus = bartender.statusDetail;
          //TODO
          //hide handle
          removePreviousTap(bartender);
          //stop tap "pouring" animation
        }

        //backup if releaseTap is not registered
        else if (bartender.statusDetail === "receivePayment") {
          removePreviousTap(bartender);
          moveBartenderToCounter(bartender);
          bt.btStatus = bartender.statusDetail;
        } else if (bt.btStatus === "startServing" && bartender.statusDetail === "reserveTap") {
          //change display to "bt-leaning"
          importBartenderSvg(bartender, "leaning", btSpotAtCounter.element);
          bt.btStatus = bartender.statusDetail;
        } else if (bt.btStatus !== "startServing" && bartender.statusDetail === "startServing") {
          importBartenderSvg(bartender, "start-serving", btSpotAtCounter.element);
          //showCustomer
          toggleCustomer(bartender);
          bt.btStatus = bartender.statusDetail;
        } else if (bt.btStatus !== "waiting" && bartender.statusDetail === "waiting") {
          //change display to "bt-leaning"
          importBartenderSvg(bartender, "leaning", btSpotAtCounter.element);
          //hide customer
          toggleCustomer(bartender);
          bt.btStatus = bartender.statusDetail;
        }
        // ---- Backup if "releaseTap comes at weird time"
        else if (bt.btStatus !== "pourBeer" && bartender.statusDetail === "releaseTap") {
          console.log("WHAT");
          bt.btStatus = "";
        } else if (bt.btStatus === "releaseTap") {
          removePreviousTap(bartender);
          if (bartender.statusDetail === "pourBeer") {
            getBartenderAndTap(bartender, "not first");
            bt.btStatus = bartender.statusDetail;
          }
          // ---- backup if bartender.statusDetail is releaseTap again: ----
          else if (bartender.statusDetail === "releaseTap") {
            console.log(bartender.name, " is releasing the tap too long - WHAT");
            //dont update bt.btStatus
            bt.btStatus = "";
          } else {
            moveBartenderToCounter(bartender);
            bt.btStatus = bartender.statusDetail;
          }

          //TODO: if bartender.statusDetail === "replaceKeg"
        }
        //TODO: if bt.btStatus === "replaceKeg" && bartender.statusDetail === "pourBeer"
      }
      // bt.btStatus = bartender.statusDetail;
      console.log(bt.btName, "new Status:", bt.btStatus);
    }
  });
}

function showBartenderData(bartender) {
  const row = document.querySelector(`.${bartender.name}-row`);
  //change data in row
  const nameCol = row.querySelector(`[data-bartender="name"]`);
  nameCol.textContent = bartender.name;
  const statusDetCol = row.querySelector(`[data-bartender="statusDetail"]`);
  statusDetCol.textContent = bartender.statusDetail;
  const tapCol = row.querySelector(`[data-bartender="usingTap"]`);
  tapCol.textContent = bartender.usingTap;
}
