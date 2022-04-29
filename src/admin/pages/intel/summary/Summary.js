import { Grid } from "@mui/material";
import React from "react";

import OverViewCard from "../../../components/OverviewCard/OverviewCard";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";

import './Summary.scss';

export default function Summary() {
  return (
    <div >
      <Grid container spacing={2} className="summary__container">

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
