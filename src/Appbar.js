import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {

    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar:{
      backgroundColor: "#D3D3D3",
      color:"black"
  },
  link:{
      textDecoration:"none",
      color:"black",
    //   marginRight: 10,
     
      
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          
          <Typography variant="h4" className={classes.title}>
            Shoes Store
          </Typography>
          <Typography variant="h4" className="App">
          
          <Button variant="contained"><Link to="/" className={classes.link}>Home</Link></Button> {''}
          <Button variant="contained"><Link to="/products" className={classes.link}>Products</Link></Button> {''}

          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
