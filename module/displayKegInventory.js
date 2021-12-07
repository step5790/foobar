import { graphBeer } from "./graphBeer";

export function displayKegInventory(kegData) {
  console.log(kegData.storage);
  const allKeg = kegData.storage;

  allKeg.forEach((element) => {
    console.log(element.name + ": " + element.amount);
  });

  graphBeer(kegData);
}
