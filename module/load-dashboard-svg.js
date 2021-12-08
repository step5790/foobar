"use strict";

export async function loadSvg() {
  const foregroundSvg = await fetch("assets/bar-foreground-taps.svg");
  const foregroundText = await foregroundSvg.text();
  const midbackgroundSvg = await fetch("assets/bar-midbackground.svg");
  const midbackgroundText = await midbackgroundSvg.text();
  const bgSvg = await fetch("assets/bar-background.svg");
  const bgText = await bgSvg.text();
  const klausLeaningSvg = await fetch("assets/bartenders/klaus-leaning.svg");
  const klausLeaningText = await klausLeaningSvg.text();
  const klausFrontSvg = await fetch("assets/bartenders/klaus-front.svg");
  const klausFrontText = await klausFrontSvg.text();
  //import to dom
  document.querySelector(".bar-background").innerHTML = bgText;
  document.querySelector(".bar-midbackground").innerHTML = midbackgroundText;
  document.querySelector(".bar-foreground").innerHTML = foregroundText;
  //bartenders
  document.querySelector("#Klaus .front").innerHTML = klausFrontText;
  document.querySelector("#Klaus .leaning").innerHTML = klausLeaningText;

  //counter

  // document.querySelectorAll(".bt-pouring .Klaus .pouring").forEach((element) => {
  //   element.innerHTML = klausPouringText;
  // });
  // document.querySelectorAll(".bt-pouring").forEach((element) => {
  //   element.innerHTML = klausBackCarryingText;
  // });
}

export async function loadBartenderAtBar(name) {
  const nameLC = name.toLowerCase();
  const bartenderPouringSvg = await fetch(`assets/bartenders/${nameLC}-pouring.svg`);
  const svgText = await bartenderPouringSvg.text();
  return svgText;
}

// export async function loadKlausBackCarrying() {
//   const klausPouringSvg = await fetch("assets/bartenders/klaus-pouring.svg");
//   const klausPouringText = await klausPouringSvg.text();

//   return klausPouringText, klausBackCarryingSvg };
// }
