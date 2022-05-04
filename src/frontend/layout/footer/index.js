
import { Box , Toolbar, AppBar, Typography, } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


import './footer.scss'

export default function Footer(){
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }} className="iai_login_footer_main">
                <Toolbar className="iai_login_footer_topbar" style={{ borderBottom: '1px solid #D9D9D9' }}>
                 <Typography variant="p" component="div" sx={{ flexGrow: 1 }} >Copyright© 2022 infra ai. All rights reserved.</Typography>
                 <Typography variant="h6" >infra ai</Typography>
                </Toolbar>
                <Toolbar className="iai_login_footer_topbar">
                 <Typography variant="p" component="div" sx={{ flexGrow: 1 }} >Privacy  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Legal  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Terms and Conditions</Typography>
                 <Typography variant="p" >Stay in the Loop ?</Typography> &nbsp;&nbsp;&nbsp;&nbsp;<InstagramIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<FacebookIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<TwitterIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<YouTubeIcon/>
                </Toolbar>
            </AppBar>    
        </Box> 

    )
}