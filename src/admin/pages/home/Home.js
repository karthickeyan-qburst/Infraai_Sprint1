import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import TabNav from "../../components/Tabs/TabNav";
import Marketplace from "../maketplace/Marketplace";

function Home() {
  const data = [
    { name: "Project", value: "1", element: "Table Component" },
    { name: "My Project", value: "2", element: "Table Component" },
    { name: "My Data  ", value: "3", element: <Marketplace /> },
    { name: "Messages", value: "4", element: "Page skipped" },
  ];
  return (
    <>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={0.5}
        alignContent="flex-start"
      >
        <Grid className={"infai_inner_content"} item xs={6} md={8}>
          <Typography variant="h5" component="div" className="card__heading">
            Home
          </Typography>
        </Grid>
        <Grid className={"infai_inner_content"} item xs={6} md={4}>
          Search
        </Grid>
        <Grid item xs={12} md={12}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabNav tabData={data} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default Home;
