export function displayQues(queData) {
  console.log(queData.queue);

  if (queData.queue.at(-1)) {
    console.log("Ques:" + queData.queue.length);
    console.log(queData.queue.at(-1).id);
  }
}
