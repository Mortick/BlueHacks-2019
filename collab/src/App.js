import React from 'react';
import CollabLogo from './logo3.png';
import './App.css';
import ListPage from './ListPage';
import ItemPage from './ItemPage';
import ItemPageB from './ItemPageB';
import ItemPageC from './ItemPageC';
import ItemPageD from './ItemPageD';
import ItemPageE from './ItemPageE';
import SearchAppBar from './searchAppBar';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TestSearchBar from './TestSearchBar.js';
import { createMuiTheme } from '@material-ui/core/styles';
import Home from './Home';

const theme = createMuiTheme({
  palette: {
   primary: {
     main: '#ada4eb',
   },
   secondary: {
     main: '#ada4eb',
   },
 },
});

function App() {
  return (
    <BrowserRouter>
    <div>
    {/*ANYTHING HERE WILL BE EVERYWHERE*/}
    <TestSearchBar/>
      <div> {/*these are every PAGE that goes on the site. If you want something that is on every page, add as a div around*/}
        <Route path='/ListPage' component={ListPage} />
        <Route path='/ItemPage' component={ItemPage} />
        <Route path='/ItemPageB' component={ItemPageB} />
        <Route path='/ItemPageC' component={ItemPageC} />
        <Route path='/ItemPageD' component={ItemPageD} />
        <Route path='/ItemPageE' component={ItemPageE} />
        <Route path='/Home' component={Home} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
