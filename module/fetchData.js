export function fetchData() {
  var orders = JSON.parse(localStorage.getItem("orders"));
  console.log(JSON.parse(localStorage.getItem("orders")));

  const form = document.querySelector(".form");
  form.addEventListener("submit", logSubmit);

  console.log(localStorage.getItem("orders"));
}

function logSubmit(event) {
  event.preventDefault();
  console.log("submit");
}

//map array by order names and quantities
//   const cleanedOrder = order.map(getNameAndQuantity);
//   console.log(cleanedOrder);
// function getNameAndQuantity(orderObj) {
// let newObject = {};
// newObject.name = orderObj.beer.name;
// newObject.quantity = orderObj.quantity;
// return newObject;
// }
