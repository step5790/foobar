export function postData(e) {
  e.preventDefault();

  var orders = JSON.parse(localStorage.getItem("orders"));
  // console.log(JSON.parse(orders));

  // const payload = [
  //   { name: "Row 26", amount: 2 },
  //   { name: "Row 26", amount: 2 },
  // ];

  // document.querySelector(".finish-payment").setAttribute("disabled", true);

  const postData = JSON.stringify(orders);

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

  console.log(postData);
  window.location.href = "/thank-you.html";
}
