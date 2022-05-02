import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

import Content from "../CardContents/Content";
import MiniCard from "../MiniCard/MiniCard";
import MarketPlaceCard from "../MarketPlaceCard/MarketPlaceCard";
import ContactCard from "../ContactCard/ContactCard"
import "./Card.scss";

function CardComponent(props) {
  const {
    data,
    showMinicard = false,
    marketPlace = false,
    contacts =false,
    title = "",
    subTitle = "",
    contactData
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
                <Box className="card__content-minicard-data-1">
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
              <Grid container className="market__container">
                <Grid lg={4} className="marketplace__container">
                  <MarketPlaceCard />
                </Grid>
                <Grid lg={4} className="marketplace__container">
                  <MarketPlaceCard />
                </Grid>
                <Grid lg={4} className="marketplace__container">
                  <MarketPlaceCard />
                </Grid>
              </Grid>
          )}

          {contacts && (
              <Grid container  rowSpacing={5} columnSpacing={5} className="contact__container">
                { contactData.map((contact) => (
                  <Grid item md={5} key={contact.id} >
                      <ContactCard data={contact}/>
                  </Grid>
                  ))
                }
              </Grid>
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
