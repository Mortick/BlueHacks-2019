import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListPage from './ListPage'
import SearchAppBar from './searchAppBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <SearchAppBar/>
        <ListPage/>
        </a>
      </header>
    </div>
  );
}

export default App;
