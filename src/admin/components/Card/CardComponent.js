import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import Content from "../CardContents/Content";

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
        </CardContent>
      </Card>
    </Box>
  );
}

export default CardComponent;
