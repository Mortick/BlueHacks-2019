import React, { Component } from "react";
import ListItem from "./ListItem";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import getAntibodyValues from "./getAntibodyVals";

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
}));

const values = getAntibodyValues("AntiBody A");

export default function SimpleContainer() {
  const classes = useStyles();
  let name = "";
  let expiration = "";
  let quantity = "";
  let price = "";
  let lab = "";

  
  name = values.name;
  expiration = values.expiration;
  quantity = values.quantity;
  price = values.price;
  lab = values.lab;

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
      <Typography variant="h5">Name: {name}</Typography>
      <Typography variant="h5">Expiration: {expiration}</Typography>
      <Typography variant="h5">quantity: {quantity}</Typography>
      <Typography variant="h5">Price: {price}</Typography>
      <Typography variant="h5">lab: {lab}</Typography>
      <Link to="ListPage.js">
        <Button variant="contained" color="primary" className={classes.button}>
          ADD TO CART
        </Button>
      </Link>
    </div>
  );
}
