"use strict";
import { loadSvg } from "./load-dashboard-svg";

window.addEventListener("DOMContentLoaded", start);

let bartenderStatus = {
  Klaus: "",
  Jonas: "",
  Peter: "",
  Dannie: "",
};

function start() {
  console.log("start");
  loadSvg();
  loadDynamicData();
  setTimeout(loadDynamicData, 1000);
}

function loadDynamicData() {
  const url = "https://hangover3.herokuapp.com/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => getData(data));
  // setTimeout(loadDynamicData, 2000);
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
  // const bartenderName = bartender.name;
  console.log("Klaus old Status", bartenderStatus.Klaus);
  const newStatus = bartender.statusDetail;
  bartenderStatus.Klaus = newStatus;
  console.log("new Status:", bartenderStatus.Klaus);
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
