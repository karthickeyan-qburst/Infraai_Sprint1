import { Grid } from "@mui/material";
import React from "react";

import OverViewCard from "../../../components/OverviewCard/OverviewCard";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";

import "./Rawdata.scss";

export default function Rawdata() {
  return (
    <div>
      <Grid container spacing={2} className="rawdata__container">
        <Grid xs={6} md={6} lg={6} xl={6}>
          <ProjectCard showStatus={true} />
        </Grid>
      </Grid>
    </div>
  );
}
