export function registerCart() {
  const cart = document.querySelector(".cartButton");
  cart.addEventListener("click", toggleCart);

  document
    .querySelector("button#cartButton")
    .addEventListener("click", openLogin);
  document.querySelector("#close-modal").addEventListener("click", closeLogin);
}

function toggleCart() {
  document.querySelector("#cart").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector(".exitCart").addEventListener("click", closeCart);
  document.querySelector("#productlist").classList.add("noScroll");

  function closeCart() {
    document.querySelector("#cart").classList.add("hidden");
    document.querySelector("#pageMask").classList.add("hidden");
    document.querySelector("#productlist").classList.remove("noScroll");
  }
}

function openLogin() {
  document.querySelector("#modal-login").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector("#productlist").classList.add("noScroll");
}

function closeLogin() {
  document.querySelector("#modal-login").classList.add("hidden");
}
