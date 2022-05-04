import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import  Avatar  from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from './svg/whatsapp.svg';
import "./ContactCard.scss";



function ContactCard(props){

    const { image = '', phone ='', title = '' } = props.data;

    return (
        <Card sx={{ minWidth: 275 }} className="contactcard contactcard__main" sx={{mb:'3rem'}}>
            <Grid container className="contactcard__grid"  alignContent="center"  >
                <Grid item md={3}  >
                    <Avatar variant="square" src={image}  sx={{ width: 120, height: 120 }}/>
                </Grid>
                <Grid container item md={6} className="contactcard__grid" rowSpacing={2} sx={{ml:'-2.2rem'}}>
                    <Grid md={12} className="contactcard_name">{title}</Grid>
                    <Grid md={12} className="contactcard_phone">{phone}</Grid>
                </Grid>
                <Grid container item md={3} alignItems="center" className="contactcard__grid1" sx={{mr:'27px'}}>
                   <Avatar variant="square" className="contactcard_icons"  sx={{ width: 40, height: 40 }}><LocalPhoneIcon/></Avatar>
                   <Avatar variant="square" className="contactcard_icons" sx={{ width: 40, height: 40 }}><img src={WhatsAppIcon}/></Avatar>
                </Grid>
            </Grid>
        </Card>    
    )


}

export default ContactCard;