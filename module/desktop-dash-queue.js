"use strict";

import { calculateDifference, getRandomInt } from "./calculations";

let oldQueue = 0;

const svgsInUse = [];

export function createQueue(queueData, svgs) {
  const queue = queueData.length;

  if (queue > oldQueue) {
    console.log("Queue became LONGER and is now", queue, "long");
    //TODO:
    //calculate difference between how many was and is now
    const difference = calculateDifference(queue, oldQueue);
    console.log("should add", difference, "svgs in que");

    //check if queue is longer than 8
    if (queue > 8) {
      console.log("queue is longer than 8 people");
      //if yes: add all single svgs
      //todo: add queue groups based on queue length
    } else {
      //if no:
      //send the difference as params to addQueue
      addQueue(svgs, difference);
    }
  } else if (queue < oldQueue) {
    console.log("Queue became SHORTER and is now", queue, "long");
    //check if length is not 0
    if (oldQueue > 0) {
      //calculate difference between how many was and is now
      const difference = calculateDifference(queue, oldQueue);
      console.log("should remove", difference, "svgs from que");
      //send the difference as params to removeQueue

      removeQueue(difference);
    }
  } else {
    console.log("Queue length did not change and is still", queue);
  }
  oldQueue = queue;
}

// function addQueueGroups(){}

function addQueue(svgs, max) {
  //loop max times
  for (let i = 0; i < max; i++) {
    createQueueSvg(svgs);
  }
  console.log("created newQueueElement", max, "times");
  console.log(svgsInUse);
}

function createQueueSvg(svgs) {
  //get random customer from array based on arr length
  const randomIndex = getRandomInt(svgs.length);
  //check that index is not in use
  const isInUse = checkIfSvgInUse(randomIndex);
  if (isInUse === false) {
    // grab parent
    const parent = document.querySelector(".queue");
    // create a new div element
    const newQueueElement = document.createElement("div");

    //create inside element
    newQueueElement.innerHTML = svgs[randomIndex];
    //push index in the array of svgsInUse
    svgsInUse.push(randomIndex);
    // add the newly created element and its content into the DOM
    parent.appendChild(newQueueElement);
  } else {
    console.log(randomIndex, "svg is already in use");
    createQueueSvg(svgs);
  }
}

function checkIfSvgInUse(number) {
  return svgsInUse.some((index) => index === number);
}

function removeQueue(max) {
  const parent = document.querySelector(".queue");
  for (let i = 0; i < max; i++) {
    parent.firstElementChild.remove();
    //remove first element in array
    svgsInUse.shift();
  }
  console.log("removed lastElementChild", max, "times");
  console.log(svgsInUse);
}
