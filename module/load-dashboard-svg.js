"use strict";

export async function loadSvg() {
  const foregroundSvg = await fetch("assets/bar-foreground-taps.svg");
  const foregroundText = await foregroundSvg.text();
  const midbackgroundSvg = await fetch("assets/bar-midbackground.svg");
  const midbackgroundText = await midbackgroundSvg.text();
  const bgSvg = await fetch("assets/bar-background.svg");
  const bgText = await bgSvg.text();
  //import to dom
  document.querySelector(".bar-background").innerHTML = bgText;
  document.querySelector(".bar-midbackground").innerHTML = midbackgroundText;
  document.querySelector(".bar-foreground").innerHTML = foregroundText;
  // TODO:
  //add each svg to bt object in bt array
  // import customers in DOM
  // document.querySelectorAll(".customer").forEach((element) => {
  //   element.innerHTML = stephenSvgText;
  // });
}

export async function loadBartenderSvg(name, display) {
  const nameLC = name.toLowerCase();
  const bartenderSvg = await fetch(`assets/bartenders/${nameLC}-${display}.svg`);
  const svgText = await bartenderSvg.text();
  return svgText;
}

export async function loadCustomerSvgs() {
  const scarletSvg = await fetch("assets/customers/scarlet.svg");
  const scarletSvgText = await scarletSvg.text();
  const terrySvg = await fetch("assets/customers/terry.svg");
  const terrySvgText = await terrySvg.text();
  const filipSvg = await fetch("assets/customers/filip.svg");
  const filipSvgText = await filipSvg.text();
  const peterSvg = await fetch("assets/customers/peter.svg");
  const peterSvgText = await peterSvg.text();
  const stephenSvg = await fetch("assets/customers/stephen.svg");
  const stephenSvgText = await stephenSvg.text();
  return [scarletSvgText, terrySvgText, filipSvgText, peterSvgText, stephenSvgText];
}
