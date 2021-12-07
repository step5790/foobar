export function displayQues(queData) {
  console.log(queData.queue);

  if (queData.queue.at(-1)) {
    console.log("Ques:" + queData.queue.length);
    console.log(queData.queue.at(-1).id);

    document.querySelector(".item-1 .item-sub").innerHTML =
      queData.queue.length;
    document.querySelector(".item-2 .item-sub").innerHTML =
      queData.queue.at(-1).id;
  }
}
