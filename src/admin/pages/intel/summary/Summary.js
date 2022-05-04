import { Grid } from "@mui/material";
import React from "react";

import OverViewCard from "../../../components/OverviewCard/OverviewCard";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";

import "./Summary.scss";

export default function Summary() {
  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData("Status:", "Pre-RFP Release"),
    createData(
      "Value:",
      "$80,183,156.50 Total Contract Value / $16,037,558.86 Total Annual"
    ),
    createData("RFP Date(est.).", "23/01/2022"),
    createData("Incumbent:", "DBI"),
    createData("Miles", "11"),
    createData("Attachments:", <button>View Attachment</button>),
  ];
  return (
    <div>
      <Grid container spacing={2} className="summary__container">
        <Grid xs={6} md={6} lg={6} xl={6}>
          <ProjectCard />
        </Grid>

        <Grid xs={6} md={6} lg={6} xl={6}>
          <OverViewCard rows={rows} title="Overview" />
        </Grid>
      </Grid>
    </div>
  );
}
