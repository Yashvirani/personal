import React from 'react';
import './Navbar.css';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import TemporaryDrawer from '../Drawer/Drawer';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
    isMobileOnly
  } from "react-device-detect";



function Navbar() {
    const useStyles = makeStyles((theme) => ({
       down_left:{
           width:'50%',
           marginTop:'7%'

       },
       down_right:{
           width:'50%'
       },
       right_svg:{
        height: '50%',
        objectFit: 'contain',
        width: '100%',
        paddingTop: '14vh',
       },
       left_svg_img:{
        objectFit: 'contain',
        width: '25%',
        marginLeft: '37%',
        
       },
       left_txt:{
           textAlign:'center',
           marginTop:'4vh',
           marginBottom:"2vh",
           fontFamily: "Montserrat sans-serif",
           fontWeight:"800",

       },
       left_txt2:{
        textAlign:'center',
        marginTop:'2vh',
        marginBottom:"2vh",
        fontFamily: "Montserrat sans-serif",
        fontWeight:"800",

      },
      social:{
        display:'flex',
        justifyContent:'space-around',
        marginTop:'10%'
      }
      }));

      
    const classes = useStyles();
    return (
        
        <div>
            
              <div className="navbar">
                <div className="background">
                    <div className="logo">
                        <h2>Yash Virani</h2>
                    </div>
                    <div className="right">
                        <div><h4>Home</h4></div>
                        <div><h4>Skills</h4></div>
                        <div><h4>Projects</h4></div>
                        <div><h4>About</h4></div>
                        <div><h4>Contact</h4></div>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default Navbar;
