import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from './styles.js';
import logo from "../../assets/images/logo.png";

function Header() {
  const classes = useStyles();
    return (
      <AppBar className={classes.appBarColor} position="static">
      <Toolbar>
        <img src={logo} className={classes.logoSize} alt="staircase"/>
      </Toolbar>
    </AppBar>
    );
  }
  
  export default Header;
  