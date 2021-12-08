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
    .then((data) => showData(data));
  setTimeout(loadDynamicData, 1000);
}

function showData(data) {
  console.log(data);
}
