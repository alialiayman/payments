import { Box, Button, Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const SideNav = () => {
  let history = useHistory();

  return (
    <Box p={4}>
      <Grid container direction="column">
        <Grid item>
          <Button onClick={() => history.push("/")}>Home</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => history.push("/stripe")}>Stripe</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => history.push("/brain-tree")}>BrainTree</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SideNav;
