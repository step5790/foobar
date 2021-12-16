export function fetchData() {
  var orders = JSON.parse(localStorage.getItem("order"));

  const form = document.querySelector(".form");
  form.addEventListener("submit", logSubmit);
}

function logSubmit(event) {
  event.preventDefault();
}
