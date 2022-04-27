import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

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
            <Typography component="div" className="card__content-minicard">
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <div
                style={{
                  widht: "50px",
                  height: "50px",
                  border: "5px solid yellow",
                }}
              >
                kjdfvjn
              </div>
            </Typography>
          </CardContent>
        </Card>
      </Box>
  );
}

export default CardComponent;
