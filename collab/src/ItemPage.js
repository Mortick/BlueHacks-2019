import React from "react";
import ListItem from "./ListItem";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <div>
      <span>Name: Name of Antibody</span>
      <Link to="ListPage.js">
        <Button variant="contained" color="primary" className={classes.button}>
          ADD TO CART
        </Button>
      </Link>
    </div>
  );
}
