const form = document.querySelector(".form");
form.addEventListener("submit", logSubmit);

function logSubmit(event) {
  event.preventDefault();
  console.log(document.activeElement.value);

  if (document.activeElement.value === "signin") {
    var totalOrder = [
      { name: "El Hefe", amount: 2 },
      { name: "El Hefe", amount: 2 },
    ];

    localStorage.setItem("orders", JSON.stringify(totalOrder));
    console.log(JSON.parse(localStorage.getItem("orders")));
    window.location.href = "/form-login.html?status=login";
  } else if (document.activeElement.value === "guest") {
    var totalOrder = [
      { name: "Steampunk", amount: 2 },
      { name: "Steampunk", amount: 2 },
    ];

    localStorage.setItem("orders", JSON.stringify(totalOrder));
    console.log(JSON.parse(localStorage.getItem("orders")));
    window.location.href = "/form-login.html?status=guest";
  }
}
