export function displayTapLevels(tapData) {
  document.querySelector("#dash-tap .content").innerHTML = "";

  const allTap = tapData.taps;

  allTap.forEach((element) => {
    let percentage = Math.round((parseInt(element.level) / 2500) * 100) + "%";

    const clone = document
      .querySelector("template#tap-levels")
      .content.cloneNode(true);

    clone.querySelector(".tap-name").textContent = element.beer;
    clone.querySelector(".tap-percentage").textContent = percentage;

    if (parseInt(percentage) <= 70 && parseInt(percentage) > 40) {
      clone.querySelector(".tap-percentage").style.color = "orange";
      clone.querySelector(".tap-icon").src = "/assets/beer/low.svg";
    } else if (parseInt(percentage) <= 40) {
      clone.querySelector(".tap-percentage").style.color = "red";
      clone.querySelector(".tap-icon").src = "/assets/beer/very-low.svg";
    } else {
      clone.querySelector(".tap-percentage").style.color = "green";
      clone.querySelector(".tap-icon").src = "/assets/beer/full.svg";
    }

    document.querySelector("#dash-tap .content").appendChild(clone);
  });
}
