import { useState } from "react";
import { 
    Grid,
    Paper, 
    TextField,
    Typography, 
    Button ,
    FormControlLabel, 
    Checkbox 
} from "@mui/material";
import {Auth} from 'aws-amplify'
import Header from "../layout/header";
import Footer from '../layout/footer'
import bg from './images/bg.png'
import './login.scss';


export default function Login(){
    const [credentials, setCredentials] =  useState({username: '', password: ''});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCredentials({...credentials, [name]: value})
    }

    const handleSubmit = async () => {
            try{
            const user = await Auth.signIn(credentials)
            console.log(user)
            }catch(err){
                console.log(err)
            }
    }


    return (<>
            
            <Header/>
                <Grid 
                    container 
                    justifyContent="center" 
                    spacing={2}
                    style={{backgroundImage: `url(${bg})`, height: '90vh'}}
                >
                    <Paper variant="outlined" className="iai_container">
                        <Typography variant="h5" className="iai_title">Login</Typography>  
                        <Grid item className="iai_margin iai_field" >
                            <TextField fullWidth name="username" onChange={handleChange} placeholder="Email Address"/>
                        </Grid>
                        <Grid item  className="iai_margin iai_field">
                            <TextField fullWidth type="password" name="password" onChange={handleChange} placeholder="Password"/>
                        </Grid>
                        <Grid item  className="iai_margin">
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                        <Typography className="iai_span;" component="span">Forgot Password?</Typography> 
                        </Grid>
                        
                        <Grid item className="iai_margin">
                        <Button variant="contained" onClick={handleSubmit} className="iai_button" fullWidth >Login</Button>
                        </Grid>
                    </Paper>
                </Grid>
            
            <Footer/>
    </>)
}