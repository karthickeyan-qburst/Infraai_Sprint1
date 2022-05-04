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
    analyst,
    subTitle = "",
  } = props;

  return (
    <Box component="main" className="main__body">
      <Card className="card">
        <CardContent>
          <Grid container>
            <Grid container alignItems="center" sx={{pl:4,pb:2}} item md="1">
              { analyst.image && 
              <Avatar  sx={{ width: 56, height: 56 }} src={analyst.image}>JD</Avatar>
              }
            </Grid>
            <Grid container item md={8} alignItems="center" sx={{display: 'inline-block',ml: -3 }}  >
              <Typography component="div"  sx={{mt: 1}}  className="card__analysis_author">
                {analyst.name}
            </Typography>
            <Typography component="div"  className="card__analysis_email">
            {analyst.email}
            </Typography> 
            </Grid>
            <Grid item container alignItems="center" md={3} className="analysis__header" >
              <Grid item md={6} sx={{display: 'flex'}}>
                <QueryBuilderIcon fontSize="small" sx={{mr: 1}}/>
                 <Typography component="div"  className="card__analysis_email">
                 {analyst.date}
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
          <Typography component="div" className="card__analysis_content">{analyst.main_content}
          {analyst.award_price && <Card class="card__analysis_price" >Predicted Award Value: <span class="award_price">{analyst.award_price}</span></Card>}
          {analyst.sub_content} 
          </Typography>
          
         
         
        </CardContent>
      </Card>
    </Box>
  );
}

export default CardComponent;
