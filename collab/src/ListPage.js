import React from 'react';
import ListItem from './ListItem'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
    <Grid item xs={1}></Grid>
      <Grid item xs> </Grid>
    <Grid item xs={1}></Grid>
    </Grid>

      <Grid container spacing={3}>
      <Grid item xs={1}></Grid>
        <Grid item xs>
        <Link to = 'ItemPage'>  <ListItem/> </Link>
        </Grid>
      <Grid item xs={1}></Grid>
      </Grid>
      <br/>
      <Grid container spacing={3}>
      <Grid item xs={1}></Grid>
        <Grid item xs>
          <Link to = 'ItemPageB'>  <ListItem/> </Link>
        </Grid>
      <Grid item xs={1}></Grid>
      </Grid>
      <br/>
      <Grid container spacing={3}>
      <Grid item xs={1}></Grid>
        <Grid item xs>
          <Link to = 'ItemPageC'>  <ListItem/> </Link>
        </Grid>
      <Grid item xs={1}></Grid>
      </Grid>
      <br/>
      <Grid container spacing={3}>
      <Grid item xs={1}></Grid>
        <Grid item xs>
          <Link to = 'ItemPageD'>  <ListItem/> </Link>
        </Grid>
      <Grid item xs={1}></Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={1}></Grid>
        <Grid item xs>
          <Link to = 'ItemPageE'>  <ListItem/> </Link>
        </Grid>
      <Grid item xs={1}></Grid>
      </Grid>

    </div>
  );
}
