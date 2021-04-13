import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './styles.js'
import logo from "../../assets/images/logo.png"

function Header() {
  const classes = useStyles();
    return (
      <AppBar className={classes.appBarColor} position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        </IconButton>
        <img src={logo} className={classes.logoSize} alt="staircase"/>
      </Toolbar>
    </AppBar>
    );
  }
  
  export default Header;
  