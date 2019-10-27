import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListPage from './ListPage';
import ItemPage from './ItemPage';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
    {/*ANYTHING HERE WILL BE EVERYWHERE*/}
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
