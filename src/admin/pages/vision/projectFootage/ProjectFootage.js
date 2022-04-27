import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function ProjectFootage() {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      spacing={0.5}
      alignContent="flex-start"
    >
      <Grid className={"infai_inner_content"} item xs={6} md={8}>
        <Typography variant="h5" component="div" className="card__heading">
          PROJECT Footage
        </Typography>
      </Grid>
      <Grid className={"infai_inner_content"} item xs={6} md={4}>
        Hand draw buttons
      </Grid>
      <Grid item xs={12} md={12}>
        <Box sx={{ width: "100%", typography: "body1" }}>Hand Drawing</Box>
      </Grid>
    </Grid>
  );
}
