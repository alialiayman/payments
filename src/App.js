import { Grid } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BrainTree from "./features/BrainTree";
import Home from "./features/Home";
import SideNav from "./features/SideNav";
import Stripe from "./features/Stripe";

function App() {
  return (
    <Router>
      <Grid container>
        <Grid item md={2}>
          <Route component={SideNav} />
        </Grid>
        <Grid item md={9}>
          <Grid container justify="center">
            <Route path="/" exact component={Home} />
            <Route path="/stripe" exact component={Stripe} />
            <Route path="/brain-tree" exact component={BrainTree} />
          </Grid>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
