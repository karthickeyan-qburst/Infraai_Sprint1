import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import WestIcon from "@mui/icons-material/West";
import React from "react";

import Summary from "./summary/Summary";
import Description from "./description/Description";
import Timeline from "./timeline/Timeline";
import Award from "./award/Award";
import Analysis from "./analysis/Analysis";
import Contact from "./contacts/Contact";
import Marketplace from "./../maketplace/Marketplace";
import TabNav from "./../../components/Tabs/TabNav";

import "./Intel.scss";

export default function Intel() {
  const data = [
    { name: "Summary", value: "1", element: <Summary /> },
    { name: "Description", value: "2", element: <Description /> },
    { name: "Timeline", value: "3", element: <Timeline /> },
    { name: "Award", value: "4", element: <Award /> },
    { name: "Analysis", value: "5", element: <Analysis /> },
    { name: "Contacts", value: "6", element: <Contact /> },
    { name: "Marketplace", value: "7", element: <Marketplace /> },
  ];
  return (
    <>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={0.5}
        alignContent="flex-start"
      >
        <Grid className="infai_inner_content" item xs={6} md={8}>
          <WestIcon />
          <Typography variant="h5" component="div" className="card__heading">
            INTEL
          </Typography>
        </Grid>
        {/* <Grid className={"infai_inner_content"} item xs={6} md={4}>
          {" "}
          Search Icon
        </Grid> */}
        <Grid item xs={12} md={12}>
          <Box className="intel__tab-container">
            <TabNav tabData={data} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
