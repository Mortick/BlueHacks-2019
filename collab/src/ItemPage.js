import React, { Component } from "react";
import ListItem from "./ListItem";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import getAntibodyValues from "./getAntibodyVals";
import Paper from '@material-ui/core/Paper';
import LabImage from './aBlue.png'

class itemPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: "Antibody A"
    };

    SimpleContainer();
  }
}
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root: {
    padding: theme.spacing(3, 2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    width: '60vw',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    width: '80vw',
    padding: theme.spacing(3, 2),
  },
}));

const values = getAntibodyValues("AntiBody A");

export default function SimpleContainer() {
  const classes = useStyles();
  let name = "";
  let expiration = "";
  let quantity = "";
  let price = "";
  let lab = "";
  let info = "";


  name = values.name;
  expiration = values.expiration;
  quantity = values.quantity;
  price = values.price;
  lab = values.labName;
  info = values.info;

  return (
    <div>
      {/* <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Name: {name}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Expiration date: {expiration}</Paper>
        </Grid>
      </Grid> */}
      <div className={classes.root}>

      <Grid container spacing={3}>
      <Grid item xs={1}></Grid>
        <Grid item xs> </Grid>
      <Grid item xs={1}></Grid>
      </Grid>

        <Grid container spacing={3}>

        <Grid item xs={10}></Grid>
          <Grid item xs>
          <Paper className={classes.details}>
          <div>
            <Paper>
              <img src={LabImage} alt="Lab1" width="210vw"/>
            </Paper>
            <br/>
            <Paper>
              <img src={LabImage} alt="Lab1" width="210vw"/>
            </Paper>
          </div>
          <font color="white">........</font>
          <Paper className={classes.paper2}>
            <Typography variant="h3"><b>{name}</b></Typography> <br/>
            <Typography variant="h4"><i>{lab}</i></Typography> <br/>
            <Typography variant="h5">Expiration: {expiration}</Typography><br/>
            <Typography variant="h5">Quantity: {quantity}</Typography><br/>
            <Typography variant="h5">Price: {price}</Typography><br/>
            <Typography variant="h5">Lab: {lab}</Typography><br/>
            <Typography variant="h5">{info}</Typography><br/>
            <Link to="ListPage.js">
              <Button variant="contained" color="primary" className={classes.button}>
                ADD TO CART
              </Button>
            </Link>
            </Paper>
          </Paper>
          </Grid>
        <Grid item xs={1}></Grid>
        </Grid>
      </div>
    </div>
  );
}
