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
    //send the difference as params to addQueue
    //check if queue is longer than 8
    //if yes: add queue groups
    //if no:
    addQueue(svgs);
  } else if (queue < oldQueue) {
    console.log("Queue became SHORTER and is now", queue, "long");
    //check if length is not 0
    if (oldQueue > 0) {
      //calculate difference between how many was and grew with
      //send the difference as params to removeQueue
      // removeQueue();
    }
  } else {
    console.log("Queue length did not change and is still", queue);
  }
  oldQueue = queue;
}

function calculateDifference(a, b) {
  return Math.abs(a - b);
}

function addQueue(svgs) {
  // grap parent
  const parent = document.querySelector(".queue");
  // create a new div element
  const newQueueElement = document.createElement("div");
  newQueueElement.innerHTML = svgs[1];
  // add the newly created element and its content into the DOM
  parent.appendChild(newQueueElement);
  console.log("created newQueueElement");
}

function removeQueue() {
  const parent = document.querySelector(".queue");
  parent.lastElementChild.remove();
  console.log("removed lastElementChild");
}
