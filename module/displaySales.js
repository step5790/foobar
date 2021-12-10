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

export function displaySales(tapData) {
  const allOrder = tapData.serving;

  if (flag == false) {
    allOrder.forEach((id) => {
      arrayId.push(id.id);
      flag = true;
    });
    console.log("flag" + flag);
    checkAllOrder(allOrder);
  }

  console.log(arrayId);
  console.log(tapData.serving[0].id);

  if (tapData.serving[0].id != arrayId[0]) {
    checkOneOrder();
    arrayId[0] = tapData.serving[0].id;
  }

  if (tapData.serving[1].id != arrayId[1]) {
    checkOneOrder();
    arrayId[1] = tapData.serving[1].id;
  }

  if (tapData.serving[2].id != arrayId[2]) {
    checkOneOrder();
    arrayId[2] = tapData.serving[2].id;
  }

  if (tapData.serving[3].id != arrayId[3]) {
    checkOneOrder();
    arrayId[3] = tapData.serving[3].id;
  }

  if (tapData.serving[3].id === undefined) {
    console.log("not found");
  }

  function checkOneOrder() {
    console.log(tapData.serving[0].order);
    tapData.serving[0].order.forEach((item) => {
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
        console.log(elHefe);
        console.log(fairy);
        console.log(githop);
        console.log(hollaback);
        console.log(hoppily);
        console.log(mowintime);
        console.log(row26);
        console.log(ruined);
        console.log(sleighride);
        console.log(steampunk);
      });
    });
  }
}

// const ctx = document.getElementById("myChart");
// const myChart = new Chart(ctx, {
//   type: "pie",
//   data: {
//     labels: ["Red", "Blue", "Yellow"],
//     datasets: [
//       {
//         label: "My First Dataset",
//         data: [
//           kegData.storage[0].amount,
//           kegData.storage[1].amount,
//           kegData.storage[2].amount,
//           kegData.storage[3].amount,
//           kegData.storage[4].amount,
//           kegData.storage[5].amount,
//           kegData.storage[6].amount,
//           kegData.storage[7].amount,
//           kegData.storage[8].amount,
//           kegData.storage[9].amount,
//         ],
//         backgroundColor: [
//           "rgb(255, 99, 132)",
//           "rgb(54, 162, 235)",
//           "rgb(255, 205, 86)",
//           "rgb(212, 100, 214)",
//           "rgb(100, 209, 214)",
//         ],
//         hoverOffset: 4,
//       },
//     ],
//   },
//   options: {
//     plugins: {
//       legend: {
//         labels: {
//           font: {
//             size: 0,
//           },
//         },
//       },
//     },
//   },
// });

// "El Hefe",
// "Fairy Tale Ale",
// "Mowintime",
// "GitHop",
// "Hollaback Lager",
// "Hoppily Ever After",
// "Row 26",
// "Ruined Childhood",
// "Sleighride",
// "Steampunk",

// kegData.storage[0].name,
//           kegData.storage[1].name,
//           kegData.storage[2].name,
//           kegData.storage[3].name,
//           kegData.storage[4].name,

// if (arrayTime.length == 0) {
//   arrayTime.push(order.startTime);
// } else {
//   if (order.startTime != arrayTime[0] && arrayTime[0] === "undefined") {
//     arrayTime[0].push(order.startTime);
//   } else if (
//     order.startTime != arrayTime[1] &&
//     arrayTime[1] === "undefined"
//   ) {
//     arrayTime[1].push(order.startTime);
//   } else if (
//     order.startTime != arrayTime[2] &&
//     arrayTime[2] === "undefined"
//   ) {
//     arrayTime[2].push(order.startTime);
//   } else if (
//     order.startTime != arrayTime[3] &&
//     arrayTime[3] === "undefined"
//   ) {
//     arrayTime[3].push(order.startTime);
//   }
// }
