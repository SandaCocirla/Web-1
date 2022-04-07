import React from 'react';
import CustomBtn from './CustomBtn'
import logo from '../logo1.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
    bar:{
        paddingTop: "0.2rem",
        backgroundColor: "#0E1C36",
        ['@media (max-width:780px)']: 
        { 
           flexDirection: "column"
           
        }
    },
    logo: {
        width: "12%", 
        ['@media (max-width:380px)']: 
        { 
           display: "contents"
        
        }
    },
   
    menuItem: {
        color: "#FFEDE1",
        cursor: "pointer", 
        flexGrow: 0.5,
        "&:hover": {
            color:  "#fff"
        },
        ['@media (max-width:380px)']: 
        { 
            paddingBottom: "0.05rem"    
        }
    }
})

function NavigaBar(){
    const classes = styles()
    return(
        <Toolbar position = "sticky" color="rgba(14,24,54, 0.5)" className={classes.bar}>
            <img src={logo} className={classes.logo}/> 
            <Typography variant="h6" className={classes.menuItem}>
                    About
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                    Games
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                     Offers
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                    Contact Us
            </Typography>
            <CustomBtn txt="Sign Up"/>
        </Toolbar>
    )
    
        
    
}

export default NavigaBar