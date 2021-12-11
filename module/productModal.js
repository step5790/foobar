export function registerModal() {
  const beers = document.querySelectorAll(".beer");

  for (const beer of beers) {
    beer.addEventListener("click", toggleModal);
  }
}

export function toggleModal() {
  console.log("aa");
  document.querySelector("#modal").classList.remove("hidden");
  document.querySelector("#pageMask").classList.remove("hidden");
  document.querySelector("#productlist").classList.add("noScroll");
  document.querySelector(".exitModal").addEventListener("click", closeModal);

  function closeModal() {
    document.querySelector("#modal").classList.add("hidden");
    document.querySelector("#pageMask").classList.add("hidden");
    document.querySelector("#productlist").classList.remove("noScroll");
  }
}
