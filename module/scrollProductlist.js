export function scrollProductlist() {
  document.querySelector(".scrollArrow2").addEventListener("click", scrollRight);
  document.querySelector(".scrollArrow1").addEventListener("click", scrollLeft);
}

function scrollRight() {
  const beer7 = document.getElementById("beer7");
  beer7.scrollIntoView({ behavior: "smooth", block: "center" });
}

function scrollLeft() {
  const beer1 = document.getElementById("beer1");
  beer1.scrollIntoView({ behavior: "smooth", block: "center" });
}
