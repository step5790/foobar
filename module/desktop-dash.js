"use strict";
import { loadSvg } from "./load-dashboard-svg";

window.addEventListener("DOMContentLoaded", start);

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
  setTimeout(loadDynamicData, 1000);
}

function getData(data) {
  const bartenderData = data.bartenders;
  console.log(bartenderData);
  showBartender(bartenderData[1]);
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
