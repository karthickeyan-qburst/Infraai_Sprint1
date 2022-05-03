import React from "react";
import { Box, Card, CardContent, Typography, Grid, Avatar } from "@mui/material";

import Content from "../CardContents/Content";
import MiniCard from "../MiniCard/MiniCard";
import MarketPlaceCard from "../MarketPlaceCard/MarketPlaceCard";
import ContactCard from "../ContactCard/ContactCard"
import ReplyIcon from '@mui/icons-material/Reply';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import DeleteIcon from '@mui/icons-material/Delete';
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
          <Grid container>
            <Grid container alignItems="center" sx={{pl:4,pb:2}} item md="1">
              <Avatar  sx={{ width: 56, height: 56 }}>JD</Avatar>
            </Grid>
            <Grid container item md={8} alignItems="center" sx={{display: 'inline-block',ml: -3 }}  >
              <Typography component="div"  sx={{mt: 1}}  className="card__analysis_author">
                John Doe
            </Typography>
            <Typography component="div"  className="card__analysis_email">
                Analyst@gmail.com
            </Typography> 
            </Grid>
            <Grid item container alignItems="center" md={3} >
              <Grid item md={6} sx={{display: 'flex'}}>
                <QueryBuilderIcon fontSize="small" sx={{mr: 1}}/>
                 <Typography component="div"  className="card__analysis_email">
                Jan 12 2022, 04:00 pm
                </Typography> 
              </Grid>
              <Grid container item md={2} justifyContent="center" style={{transform : 'scale(-1,1)'}}>
                <ReplyIcon/>
              </Grid>
              <Grid container item md={2} justifyContent="center" >
                <DeleteIcon/>
              </Grid>
            </Grid>
          </Grid>
          <Typography component="div" className="card__subheading-outline">
            {subTitle}
          </Typography >
          <Typography component="div" className="card__analysis_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
          
        </CardContent>
      </Card>
    </Box>
  );
}

export default CardComponent;
