export function fetchData() {
  var totalOrder = [
    { name: "Mowintime", amount: 2 },
    { name: "Mowintime", amount: 2 },
  ];

  localStorage.setItem("orders", JSON.stringify(totalOrder));
  console.log(JSON.parse(localStorage.getItem("orders")));
}
