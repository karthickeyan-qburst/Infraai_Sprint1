import React from "react";

import { Grid } from "@mui/material";

import OverViewCard from "../../../components/OverviewCard/OverviewCard";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";

import "./OrderConditional.scss";

export default function OrderConditionalReport() {
  return (
    <div>
      <Grid container spacing={2} className="orderinventory__container">
        <Grid xs={6} md={6} lg={6} xl={6}>
          <ProjectCard />
        </Grid>

        <Grid xs={6} md={6} lg={6} xl={6}>
          <OverViewCard />
        </Grid>
      </Grid>
    </div>
  );
}
