import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

import Content from "../CardContents/Content";
import MiniCard from "../MiniCard/MiniCard";

import "./Card.scss";

function CardComponent() {
  return (

      <Box component="main" className="main__body">
        <Card className="card">
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="card__heading"
            >
              Description
            </Typography>
            <Typography component="div" className="card__subheading-outline">
              Hello
            </Typography>
            <Typography component="div" className="card__content-outline">
              <Content />
            </Typography>
            <Typography component="div" className="card__content-minicard" sx={{border: 1}}>
              <Box className="card__content-minicard-data-1">
                <Typography component='div' className="year1">2012</Typography>
                <Typography component='div' className="year1">2020</Typography>
              </Box>
              <Box className="card__content-minicard-data">
              <MiniCard />
              <MiniCard />
              <MiniCard />
              </Box>
              
            </Typography>
          </CardContent>
        </Card>
      </Box>
  );
}

export default CardComponent;
