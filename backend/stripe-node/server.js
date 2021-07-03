const stripe = require("stripe")(
  "sk_test_51J5jDDEOZo6T2xQ282c8TRDuw4ZOcspsPyo3ipj9WqvnXTjsdxEMnPpUZKNCzgbbXDG7zGpOt1XbwpRHDMGnnKVK00eMU2Y9ip"
);
const express = require("express");

const app = express();

app.use(express.static("."));

const MY_DOMAIN = "https://hajonsoft.com/checkout";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Basic software",
            customer_name: 'Ayman',
            images: ["https://i.imgur.com/EHyR2nP.png"],
          },
          unit_amount: 20000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${MY_DOMAIN}/paid`,
    cancel_url: `${MY_DOMAIN}/cancelled`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("running on port 4242"));
