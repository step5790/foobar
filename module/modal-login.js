const form = document.querySelector(".form");
form.addEventListener("submit", logSubmit);

function logSubmit(event) {
  event.preventDefault();
  console.log(document.activeElement.value);

  if (document.activeElement.value === "signin") {
    window.location.href = "/form-login.html?status=login";
  } else if (document.activeElement.value === "guest") {
    window.location.href = "/form-login.html?status=guest";
  }
}
