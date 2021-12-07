("use strict");

window.addEventListener("DOMContentLoaded", init);

async function init() {
  const url = "https://hangover3.herokuapp.com/";

  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      prepareAllData(jsonData);
    });
}

function prepareAllData(jsonData) {
  console.log(jsonData);

  displayQues(jsonData);
  displayTapLevels(jsonData);
  displayKegInventory(jsonData);
  displayBartenders(jsonData);
}

function displayQues(queData) {
  console.log(queData.queue);

  if (queData.queue.at(-1)) {
    console.log("Ques:" + queData.queue.length);
    console.log(queData.queue.at(-1).id);
  }
}

function displayTapLevels(tapData) {
  console.log(tapData.taps);
  const allTap = tapData.taps;

  allTap.forEach((element) => {
    console.log(element.beer + ": " + element.level);
  });
}

function displayKegInventory(kegData) {
  console.log(kegData.storage);
  const allKeg = kegData.storage;

  allKeg.forEach((element) => {
    console.log(element.name + ": " + element.amount);
  });

  graphBeer(kegData);
}

function displayBartenders(bartenderData) {
  console.log(bartenderData.bartenders);

  const allBartender = bartenderData.bartenders;

  allBartender.forEach((element) => {
    console.log(
      element.name +
        " " +
        "Status: " +
        element.statusDetail +
        " " +
        "| Serving customer: " +
        element.servingCustomer
    );
  });
}

// *****for graph*****

function graphBeer(kegData) {
  console.log(kegData.storage[0].amount);

  if (window.matchMedia("(max-device-width: 414px)").matches) {
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [
              kegData.storage[0].amount,
              kegData.storage[1].amount,
              kegData.storage[2].amount,
              kegData.storage[3].amount,
              kegData.storage[4].amount,
              kegData.storage[5].amount,
              kegData.storage[6].amount,
              kegData.storage[7].amount,
              kegData.storage[8].amount,
              kegData.storage[9].amount,
            ],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(212, 100, 214)",
              "rgb(100, 209, 214)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              font: {
                size: 0,
              },
            },
          },
        },
      },
    });
  }
}

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
