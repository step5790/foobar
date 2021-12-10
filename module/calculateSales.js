import { displayChart } from "./displayChart";

let elHefe = 0,
  fairy = 0,
  githop = 0,
  hollaback = 0,
  hoppily = 0,
  mowintime = 0,
  row26 = 0,
  ruined = 0,
  sleighride = 0,
  steampunk = 0;

let arrayId = new Array();
let flag = false;

export function calculateSales(tapData) {
  const allOrder = tapData.serving;

  // if (flag == false) {
  //   allOrder.forEach((id) => {
  //     arrayId.push(id.id);
  //     flag = true;
  //   });
  //   console.log("flag" + flag);
  //   checkAllOrder(allOrder);
  // }

  console.log(arrayId);

  if (tapData.serving.hasOwnProperty(0)) {
    console.log("exist");
    if (tapData.serving[0].id != arrayId[0]) {
      const x = 1;
      checkOneOrder(x);
      arrayId[0] = tapData.serving[0].id;
    }
  }
  if (tapData.serving.hasOwnProperty(1)) {
    console.log("exist");
    if (tapData.serving[1].id != arrayId[1]) {
      const x = 1;
      checkOneOrder(x);
      arrayId[1] = tapData.serving[1].id;
    }
  }
  if (tapData.serving.hasOwnProperty(2)) {
    console.log("exist");
    if (tapData.serving[2].id != arrayId[2]) {
      const x = 2;
      checkOneOrder(x);
      arrayId[2] = tapData.serving[2].id;
    }
  }
  if (tapData.serving.hasOwnProperty(3)) {
    console.log("exist");
    if (tapData.serving[3].id != arrayId[3]) {
      const x = 3;
      checkOneOrder(x);
      arrayId[3] = tapData.serving[3].id;
    }
  }

  function checkOneOrder(x) {
    // console.log(tapData.serving[x].order);
    tapData.serving[x].order.forEach((item) => {
      // console.log(item);
      switch (item) {
        case "El Hefe":
          elHefe++;
          console.log(elHefe);
          break;
        case "Fairy Tale Ale":
          fairy++;
          console.log(fairy);
          break;
        case "GitHop":
          githop++;
          console.log(githop);
          break;
        case "Hollaback Lager":
          hollaback++;
          console.log(hollaback);
          break;
        case "Hoppily Ever After":
          hoppily++;
          console.log(hoppily);
          break;
        case "Mowintime":
          mowintime++;
          console.log(mowintime);
          break;
        case "Row 26":
          row26++;
          console.log(row26);
          break;
        case "Ruined Childhood":
          ruined++;
          console.log(ruined);
          break;
        case "Sleighride":
          sleighride++;
          console.log(sleighride);
          break;
        case "Steampunk":
          steampunk++;
          console.log(steampunk);
          break;
      }
    });
  }

  function checkAllOrder(allOrder) {
    allOrder.forEach((order) => {
      const itemOrder = order.order;

      itemOrder.forEach((item) => {
        console.log(item);

        switch (item) {
          case "El Hefe":
            elHefe++;
            break;
          case "Fairy Tale Ale":
            fairy++;
            break;
          case "GitHop":
            githop++;
            break;
          case "Hollaback Lager":
            hollaback++;
            break;
          case "Hoppily Ever After":
            hoppily++;
            break;
          case "Mowintime":
            mowintime++;
            break;
          case "Row 26":
            row26++;
            break;
          case "Ruined Childhood":
            ruined++;
            break;
          case "Sleighride":
            sleighride++;
            break;
          case "Steampunk":
            steampunk++;
            break;
        }
      });
    });
  }

  console.log("elHefe " + elHefe);
  console.log("fairy " + fairy);
  console.log("githop " + githop);
  console.log("hollaback " + hollaback);
  console.log("hoppily " + hoppily);
  console.log("mowintime " + mowintime);
  console.log("row26 " + row26);
  console.log("ruined " + ruined);
  console.log("sleighride " + sleighride);
  console.log("steampunk " + steampunk);

  displayChart(
    elHefe,
    fairy,
    githop,
    hollaback,
    hoppily,
    mowintime,
    row26,
    ruined,
    sleighride,
    steampunk
  );
}
