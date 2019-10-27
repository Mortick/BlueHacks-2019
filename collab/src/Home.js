import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ListItem from "./ListItem";
import Item from "./ItemPage";
import ListPage from "./ListPage";

class Home extends Component {

  render(){
    return(
    <div>
      <ListPage/>
    </div>
    )
  }
}


export default Home;
