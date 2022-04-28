import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

import Content from "../CardContents/Content";
import MiniCard from "../MiniCard/MiniCard";

import "./Card.scss";
import MarketPlaceCard from "../MarketPlaceCard/MarketPlaceCard";

function CardComponent() {
  return (

      <Box component="main" className="main__body">
        <Card className="card">
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              className="card__heading"
            >
              Description
            </Typography>
            <Typography component="div" className="card__subheading-outline">
              Project Details
            </Typography>
            <Typography component="div" className="card__content-outline">
              <Content />
            </Typography>
            {/* <Typography component="div" className="card__content-outline">
              <MarketPlaceCard />
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
            </Typography> */}
          </CardContent>
        </Card>
      </Box>
  );
}

export default CardComponent;
