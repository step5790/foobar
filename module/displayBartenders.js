export function displayBartenders(bartenderData) {
  console.log(bartenderData.bartenders);

  document.querySelector("#dash-bartender .content").innerHTML = "";

  let bartenderStatus;
  let peterCount = 0;
  let klausCount = 0;
  let jonasCount = 0;
  let dannieCount = 0;
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

    const clone = document
      .querySelector("template#bartender")
      .content.cloneNode(true);

    clone.querySelector(".bartender-name").textContent = element.name;

    switch (element.statusDetail) {
      case "waiting":
        clone.querySelector(".bartender-status .span").textContent =
          "Waiting next task";
        break;

      case "startServing":
        clone.querySelector(".bartender-status .span").textContent =
          "Serving customer";

        switch (element.name) {
          case "Peter":
            peterCount++;
            clone.querySelector(".bartender-total-order .span").textContent =
              peterCount;
            break;
          case "Klaus":
            klausCount++;
            clone.querySelector(".bartender-total-order .span").textContent =
              klausCount;
            break;
          case "Jonas":
            jonasCount++;
            clone.querySelector(".bartender-total-order .span").textContent =
              jonasCount;
            break;
          case "Dannie":
            dannieCount++;
            clone.querySelector(".bartender-total-order .span").textContent =
              dannieCount;
            break;
        }
        break;

      case "reserveTap":
        clone.querySelector(".bartender-status .span").textContent =
          "Waiting for beer tap ";
        break;
      case "pourBeer":
        clone.querySelector(".bartender-status .span").textContent =
          "Pouring beer in tap " + element.usingTap;
        break;
      case "releaseTap":
        clone.querySelector(".bartender-status .span").textContent =
          "Releasing tap";
        break;
      case "receivePayment":
        clone.querySelector(".bartender-status .span").textContent =
          "Receiving payment";
        break;
      case "replaceKeg":
        clone.querySelector(".bartender-status .span").textContent =
          "Replacing empty keg";
        break;
    }

    clone.querySelector(".bartender-serve .span").textContent =
      "Serving customer: " + element.servingCustomer;

    document.querySelector("#dash-bartender .content").appendChild(clone);
  });
}
