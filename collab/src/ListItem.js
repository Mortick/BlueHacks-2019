import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ItemPage from './ItemPage';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Link to = 'ItemPage'>
    <Card className={classes.card}>
    <CardContent className={classes.content}>
      <Typography component="h5" variant="h5">
        A pic goes here
      </Typography>
    </CardContent>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Name of antibody
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Amount: 5ul <br/>
            Price: $100 <br/>
            blah blah blah blah blah blah idk what features should go here
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Link>
  );
}
