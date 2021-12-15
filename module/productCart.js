export function registerCart() {
  const cart = document.querySelector(".cartButton");
  cart.addEventListener("click", toggleCart);
}

function toggleCart() {
  document.querySelector("#cart").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector("#productlist").classList.add("noScroll");
  document.querySelector(".exitCart").addEventListener("click", closeCart);
  document.querySelector("#pageMask").addEventListener("click", closeCart);

  function closeCart() {
    document.querySelector("#cart").classList.add("hidden");
    document.querySelector("#pageMask").classList.add("hidden");
    document.querySelector("#productlist").classList.remove("noScroll");
  }
}
