import { render } from "sass";

export function displayChart(
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
) {
  document.querySelector(".chart").innerHTML = "";

  const newDiv = document.createElement("canvas");
  newDiv.id = "myChart";
  document.querySelector(".chart").appendChild(newDiv);

  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["El Hefe", "Fairy", "Githop", "Hollaback", "Hoppily"],
      datasets: [
        {
          label: "Beer Orders",
          data: [elHefe, fairy, githop, hollaback, hoppily],
          backgroundColor: [
            "#c8f42e",
            "#c8f42e",
            "#c8f42e",
            "#c8f42e",
            "#c8f42e",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      animation: false,
    },
  });

  // ****chart two****
  const newDiv2 = document.createElement("canvas");
  newDiv2.id = "myChart2";
  document.querySelector(".chart").appendChild(newDiv2);

  const ctx2 = document.getElementById("myChart2");
  const myChart2 = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Mowintime", "Row26", "Ruined", "Sleighride", "Steampunk"],
      datasets: [
        {
          label: "Beer Orders",
          data: [mowintime, row26, ruined, sleighride, steampunk],
          backgroundColor: [
            "#c8f42e",
            "#c8f42e",
            "#c8f42e",
            "#c8f42e",
            "#c8f42e",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      animation: false,
    },
  });
  Chart.defaults.color = "white";
}
