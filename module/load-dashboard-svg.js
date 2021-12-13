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

export async function loadQueueSvgs() {
  const singleSvg1 = await fetch("assets/queue/queue-single-1.svg");
  const queue1 = await singleSvg1.text();
  const singleSvg2 = await fetch("assets/queue/queue-single-2.svg");
  const queue2 = await singleSvg2.text();
  const singleSvg3 = await fetch("assets/queue/queue-single-3.svg");
  const queue3 = await singleSvg3.text();
  const singleSvg4 = await fetch("assets/queue/queue-single-4.svg");
  const queue4 = await singleSvg4.text();
  const singleSvg5 = await fetch("assets/queue/queue-single-5.svg");
  const queue5 = await singleSvg5.text();
  return [queue1, queue2, queue3, queue4, queue5];
}
