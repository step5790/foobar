export function postData(e) {
  e.preventDefault();

  const payload = [
    { name: "Row 26", amount: 2 },
    { name: "Row 26", amount: 2 },
  ];

  // document.querySelector(".finish-payment").setAttribute("disabled", true);

  const postData = JSON.stringify(payload);

  fetch("https://hangover3.herokuapp.com/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: postData,
  })
    .then((res) => res.json())

    .catch((err) => {
      console.error(err);
    });

  console.log("post");
}
