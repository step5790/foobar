export function scrollProductlist() {
  document.querySelector(".scrollArrow2").addEventListener("click", scrollRight);
  document.querySelector(".scrollArrow1").addEventListener("click", scrollLeft);
}

export function scrollInitial() {
  const firstBeer = document.querySelector(".beersContainer").firstElementChild;
  firstBeer.scrollTo(0, 0);
  //hide left scroll arrow
  document.querySelector(".scrollArrow1").style.opacity = 0.3;
}

function scrollRight() {
  const lastBeer = document.querySelector(".beersContainer").lastElementChild;
  lastBeer.scrollIntoView({ behavior: "smooth", block: "center" });
  //hide right arrow
  document.querySelector(".scrollArrow1").style.opacity = 1;
  document.querySelector(".scrollArrow2").style.opacity = 0.3;
}

function scrollLeft() {
  const firstBeer = document.querySelector(".beersContainer").firstElementChild;
  firstBeer.scrollIntoView({ behavior: "smooth", block: "center" });
  //hide left arrow
  document.querySelector(".scrollArrow1").style.opacity = 0.3;
  document.querySelector(".scrollArrow2").style.opacity = 1;
}
