export function fetchData() {
  var totalOrder = [
    { name: "Mowintime", amount: 2 },
    { name: "Mowintime", amount: 2 },
  ];

  localStorage.setItem("orders", JSON.stringify(totalOrder));
  console.log(JSON.parse(localStorage.getItem("orders")));
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
