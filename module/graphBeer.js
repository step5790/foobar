export function graphBeer(kegData) {
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
