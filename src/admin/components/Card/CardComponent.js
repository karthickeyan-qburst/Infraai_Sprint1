import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import Content from "../CardContents/Content";
import MiniCard from "../MiniCard/MiniCard";
import MarketPlaceCard from "../MarketPlaceCard/MarketPlaceCard";
import "./Card.scss";

function CardComponent(props) {
  const {
    data,
    showMinicard = false,
    marketPlace = false,
    title = "",
    subTitle = "",
  } = props;
  return (
    <Box component="main" className="main__body">
      <Card className="card">
        <CardContent>
          <Typography gutterBottom component="div" className="card__heading">
            {title}
          </Typography>
          <Typography component="div" className="card__subheading-outline">
            {subTitle}
          </Typography>
          <Typography component="div" className="card__content-outline">
            <Content data={data} />
            {showMinicard && (
              <Typography
                component="div"
                className="card__content-minicard"
                sx={{ border: 1 }}
              >
                <Box classOkayName="card__content-minicard-data-1">
                  <Typography component="div" className="year1">
                    2012
                  </Typography>
                  <Typography component="div" className="year1">
                    2020
                  </Typography>
                </Box>
                <Box className="card__content-minicard-data">
                  <MiniCard />
                  <MiniCard />
                  <MiniCard />
                </Box>
              </Typography>
            )}
          </Typography>

          {marketPlace && (
            <Box className="infai_marketplace">
              <MarketPlaceCard />
              <MarketPlaceCard />
              <MarketPlaceCard />
            </Box>
          )}

          {/* <Typography component="div" className="card__content-outline">
              <MarketPlaceCard />
            </Typography>
            <Typography component="div" className="card__content-minicard" sx={{border: 1}}>
              <Box classOkayName="card__content-minicard-data-1">
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
