export function displayQues(queData) {
  let totalCustomer;
  let partialTotalCustomer;

  if (queData.queue.length != 0) {
    if (queData.queue.at(-1)) {
      let partialTotalCustomer = queData.queue.at(-1).id;

      document.querySelector(".item-1 .item-sub").innerHTML =
        queData.queue.length;
      document.querySelector(".item-2 .item-sub").innerHTML =
        partialTotalCustomer;
    }

    totalCustomer = partialTotalCustomer;
  }

  if (queData.queue.length == 0) {
    document.querySelector(".item-1 .item-sub").innerHTML =
      queData.queue.length;
    // document.querySelector(".item-2 .item-sub").innerHTML = totalCustomer;
  }
}
