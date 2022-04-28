import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Map from "../../../components/Map/Map";
import "./ProjectMap.scss";

export default function ProjectMap() {
  const position = [51.505, -0.09];

  return (
    <Grid
      className="visionMap"
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      spacing={0.5}
      alignContent="flex-start"
    >
      <Grid className="visionMap__header">
        <Grid className={"infai_inner_content"}>
          <Typography variant="h5" component="div" className="card__heading">
            PROJECT MAP
          </Typography>
        </Grid>
        <Grid className={"infai_inner_content"}>
          <Button variant="outlined">Return To Overview</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}>
        <Map style={{ height: "75vh" }} />
      </Grid>
    </Grid>
  );
}
