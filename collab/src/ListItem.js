import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ItemPage from './ItemPage';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Tempimage from './aBlue.png'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SimpleCard() {
  const classes = useStyles();


  return (
    <Card className={classes.card}>
    <CardContent>
      <img src={Tempimage} alt="temp1" width="110vw"/>
    </CardContent>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Antibody Name
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Amount: 5ul <br/>
            Expiration Date: 09/15/21 <br/>
            Price: $100 <br/>
            blah blah blah blah blah blah idk what features should go here
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
