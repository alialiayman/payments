import { Typography } from "@material-ui/core";
import { Grid, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Overview from "../Overview";

const overviewProps = {
  usedBy: "Shopify,Google,Amazon,Slack,Zoom",
  idea: "You must have a backend, Custom payment: first create intent to pay using your secret key, then get  client token using publishable key, send the client token to your back end to process the payment. If you want you can simplify this a tiny bit with redirect to checkout but first you must call your back end and create a session. Both requires backend",
};
const Stripe = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Overview {...overviewProps} />
      </Grid>
      <Grid item>
        <Grid container spacing={2} justify="space-between" alignItems="center">
          <Grid item md={6}>
            <Typography>Basic software $200</Typography>
            <form
              action="http://localhost:4242/create-checkout-session"
              method="POST"
            >
              <Button variant="contained" type="submit" color="primary">
                Buy now
              </Button>
            </form>
          </Grid>
          <Grid item md={6}>
            <a href="https://buy.stripe.com/test_aEU031clw5HI4yA000">
              Payment Link https://buy.stripe.com/test_aEU031clw5HI4yA000
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Stripe;
