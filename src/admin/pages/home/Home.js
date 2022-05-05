import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";

import TabNav from "../../components/Tabs/TabNav";
import Marketplace from "../maketplace/Marketplace";
import Myprojects from "../myprojects/Myprojects";
import ConditionalReport from "../order/conditionalReport/ConditionalReport";
import ReportTable from "../../components/ReportTable/ReportTable";

import "./Home.scss";

function Home() {
  const data = [
    { name: "Project", value: "1", element: <Myprojects /> },
    { name: "My Projects", value: "2", element: <Myprojects /> },
    { name: "My Data  ", value: "3", element: <Marketplace /> },
   // { name: "Messages", value: "4", element: "Skipped" },
  ];
  const location = useLocation();
  const [tabSelected, setTabSelected] = useState("1");

  useEffect(() => {
    if (location.pathname.includes("/myprojects")) {
      setTabSelected("2");
    } else if (location.pathname.includes("/marketplace")) {
      setTabSelected("3");
    } else if (location.pathname.includes("/home")) {
      setTabSelected("1");
    }
  }, [location]);

  return (
    <>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={0.5}
        alignContent="flex-start"
      >
        <Grid className={"infai_inner_content"} item xs={6} md={8}>
          <Typography
            variant="h5"
            component="div"
            className="card__heading_home"
          >
            Home
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box className="intel__tab-container" key={tabSelected}>
            <TabNav tabData={data} tabSelected={tabSelected} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default Home;
