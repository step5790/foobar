"use strict";

let oldQueue = 0;

export function createQueue(queueData, queueSvgs) {
  const queue = queueData.length;
  if (queue > oldQueue) {
    console.log("Queue became LONGER and is now", queue, "long");
  } else if (queue < oldQueue) {
    console.log("Queue became SHORTER and is now", queue, "long");
  } else {
    console.log("Queue length did not change and is still", queue);
  }
  oldQueue = queue;
}
