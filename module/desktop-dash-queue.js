"use strict";

let oldQueue = 0;

export function createQueue(queueData, svgs) {
  const queue = queueData.length;

  if (queue > oldQueue) {
    console.log("Queue became LONGER and is now", queue, "long");
    //TODO:
    //calculate difference between how many was and grew with
    const difference = calculateDifference(queue, oldQueue);
    console.log("should add", difference, "svgs in que");

    //check if queue is longer than 8
    //if yes: add queue groups
    //if no:
    //send the difference as params to addQueue
    addQueue(svgs, difference);
  } else if (queue < oldQueue) {
    console.log("Queue became SHORTER and is now", queue, "long");
    //check if length is not 0
    if (oldQueue > 0) {
      //calculate difference between how many was and grew with
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

function calculateDifference(a, b) {
  return Math.abs(a - b);
}

function addQueue(svgs, max) {
  // grap parent
  const parent = document.querySelector(".queue");
  //loop max times
  for (let i = 0; i < max; i++) {
    // create a new div element
    const newQueueElement = document.createElement("div");
    newQueueElement.innerHTML = svgs[1];
    // add the newly created element and its content into the DOM
    parent.appendChild(newQueueElement);
  }
  console.log("created newQueueElement", max, "times");
}

function removeQueue(max) {
  const parent = document.querySelector(".queue");
  for (let i = 0; i < max; i++) {
    parent.lastElementChild.remove();
  }
  console.log("removed lastElementChild", max, "times");
}
