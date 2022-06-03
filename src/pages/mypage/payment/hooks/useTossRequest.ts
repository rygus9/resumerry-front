import client from "util/api/client";
export const paymentApprove = (url: string[]) => {
  fetch(`https://api.tosspayments.com/v1/payments/${url[1].split("=")[1]}`, {
    body: JSON.stringify({
      amount: 7900,
      orderId: `${url[0].split("=")[1]}`,
    }),
    headers: {
      Authorization:
        "Basic dGVzdF9za19ZWjFhT3dYN0s4bUJncWp3RDZxM3lReHp2TlBHOg==",
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((res) => {
      !res.ok
        ? () => {
            console.log(res.body);
            throw res;
          }
        : () => {
            console.log(res.body);
            return res.json();
          };
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const paymentAxios = (url: string[]) => {
  console.log(url);
  const data = {
    amount: 7900,
    orderId: `${url[0].split("=")[1]}`,
  };
  client
    .post(
      `https://api.tosspayments.com/v1/payments/${url[1].split("=")[1]}`,
      data,
      {
        headers: {
          Authorization:
            "Basic dGVzdF9za19ZWjFhT3dYN0s4bUJncWp3RDZxM3lReHp2TlBHOg==",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res);
    });
};
