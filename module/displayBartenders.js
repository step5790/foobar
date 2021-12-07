export function displayBartenders(bartenderData) {
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
