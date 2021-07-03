import React from "react";
import { Grid, Box } from "@material-ui/core";

const Overview = ({ usedBy, idea }) => {
  return (
    <Box p={4}>
      <Grid container direction="column" spacing={2}>
        <Grid item>{usedBy}</Grid>
        <Grid item>{idea}</Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
