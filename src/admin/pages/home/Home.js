import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";

import CardComponent from "./../../components/Card/CardComponent";

function Home() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        container
        className={"infai_fill_width_grid"}
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
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Projects" value="1" />
                  <Tab label="My Project" value="2" />
                  <Tab label="My Data" value="3" />
                  <Tab label="Messgaes" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <CardComponent />
              </TabPanel>
              <TabPanel value="2">React Table</TabPanel>
              <TabPanel value="4">Not to be dev in this sprint</TabPanel>
              <TabPanel value="3">Not to be dev in this sprint</TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
      {/* <div className="infai_fill_width">
        <h1>Home</h1>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Item One" value="1" />
                <Tab label="Item Two" value="2" />
                <Tab label="Item Three" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div> */}
    </>
  );

  {
    /* <Container maxWidth={false}>
      <CardComponent />
    </Container> */
  }
}
export default Home;
