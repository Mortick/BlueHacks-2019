import React from 'react';
import CollabLogo from './logo3.png';
import './App.css';
import ListPage from './ListPage';
import ItemPage from './ItemPage';
import SearchAppBar from './searchAppBar';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TestSearchBar from './TestSearchBar.js'

function App() {
  return (
    <BrowserRouter>
    <div>
    {/*ANYTHING HERE WILL BE EVERYWHERE*/}
    <TestSearchBar/>
    <ItemPage name="product"/>
    <ListPage/>
      <div> {/*these are every PAGE that goes on the site. If you want something that is on every page, add as a div around*/}
        <Route path='/ListPage' component={ListPage} />
        <Route path='/ItemPage' component={ItemPage} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
