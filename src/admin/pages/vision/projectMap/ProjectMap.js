import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function ProjectMap() {
  const position = [51.505, -0.09];
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      spacing={0.5}
      alignContent="flex-start"
    >
      <Grid className={"infai_inner_content"} item xs={6} md={8}>
        <Typography variant="h5" component="div" className="card__heading">
          PROJECT MAP
        </Typography>
      </Grid>
      <Grid className={"infai_inner_content"} item xs={6} md={4}>
        <Button variant="outlined">Return To Overview</Button>
      </Grid>
      <Grid item xs={12} md={12}>
        Map to be shown
      </Grid>
    </Grid>
  );
}
