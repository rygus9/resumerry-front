import client from "util/api/client";
export const paymentApprove = (url: string[]) => {
  fetch(`https://api.tosspayments.com/v1/payments/${url[1].split("=")[1]}`, {
    body: JSON.stringify({
      amount: 7900,
      orderId: `${url[0].split("=")[1]}`,
    }),
    headers: {
      Authorization:
        "Basic dGVzdF9za19PeUwwcVo0RzFWT0FnRDJSNHdrOG9XYjJNUVlnOg==",
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

export const paymentplz = (url: string[]) => {
  client.post(`/v1/payments/${url[1].split("=")[1]}/orders/success`);
};
