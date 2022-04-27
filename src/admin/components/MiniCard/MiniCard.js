import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

import './MiniCard.scss';

function MiniCard() {
    return (
        <Card className='minicard__container' >
            <CardContent>
               {/* <Typography component='div' className='minicard__header'>
                    JAN
               </Typography> */}
               <Grid container>
                   <Grid xs={12} className='minicard__header'>
                        JAN
                   </Grid>
                   <Grid xs={12} className='minicard__body'>
                       Prediction Success
                   </Grid>

               </Grid>

            </CardContent>
        </Card>
    )
}

export default MiniCard