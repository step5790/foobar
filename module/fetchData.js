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
