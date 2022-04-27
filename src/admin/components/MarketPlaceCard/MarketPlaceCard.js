import React from "react";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import "./MarketPlaceCard.scss";

function MarketPlaceCard() {
  return (
    <Card className="marketplacecard__container">
      <CardMedia
        component="img"
        height="198"
        image="https://media.istockphoto.com/photos/ready-to-work-picture-id1319981625"
        alt="Engineer at work"
      />
      <CardContent>
        <Typography component="div" className="marketplacecard__date">
          23-10-2021
        </Typography>
        <Typography component='div' className="marketplacecard__project-name">
          PROJECT NAME
        </Typography>
        <Typography className="marketplacecard__link">
            Raw Data
        </Typography >
        <Typography className="marketplacecard__link">
            Inventory Report
        </Typography>
        <Typography className="marketplacecard__link">
            Condition Report
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MarketPlaceCard;
