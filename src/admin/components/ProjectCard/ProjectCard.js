import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@mui/material";

import "./ProjectCard.scss";

function ProjectCard() {
  return (
    <Box component="main" className="projectcard-main__body">
      <Card className="projectcard__content">
        <CardContent>
          <Typography component="div" className="projectcard__content-heading">
            Woodrow Wilson Bridge
          </Typography>
          <Grid
            container
            className="projectcard__content-details"
            direction="column"
          >
            <Grid className="details" container direction="row">
              <Grid xs={3}>
                <Typography
                  component="div"
                  className="projectcard__content-subheading"
                >
                  Project ID:
                </Typography>
              </Grid>
              <Grid xs={9}>
                <Typography
                  component="div"
                  className="projectcard__content-value"
                >
                  123456
                </Typography>
              </Grid>
            </Grid>
            <Grid className="details" container direction="row">
              <Grid xs={3}>
                <Typography
                  component="div"
                  className="projectcard__content-subheading"
                >
                  Contracting Entity:
                </Typography>
              </Grid>
              <Grid xs={9}>
                <Typography
                  component="div"
                  className="projectcard__content-value"
                >
                  VDOT
                </Typography>
              </Grid>
            </Grid>
            <Grid className="details" container direction="row">
              <Grid xs={3}>
                <Typography
                  component="div"
                  className="projectcard__content-subheading"
                >
                  Previous RFP:
                </Typography>
              </Grid>
              <Grid xs={9}>
                <Typography
                  component="div"
                  className="projectcard__content-value"
                >
                  123456(Hyperlink)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider className="projectcard__divider"> </Divider>
          <Grid container className="projectcard__content-summary">
            <Typography
              component="div"
              className="projectcard__content-summary-heading"
            >
              Project Summary
            </Typography>
            <Typography
              component="div"
              className="projectcard__content-summary-content"
            >
              O&M on 1,314Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Mi eros cursus consequat est. Accumsan vulputate laoreet
              ullamcorper condimentum adipiscing fringilla sed mi tellus. Nisl
              donec arcu nunc, placerat mauris, malesuada massa nullam
              quis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
              eros cursus consequat est
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProjectCard;
