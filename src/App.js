import React, { Component } from 'react';
import SearchBar from './SearchBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <SearchBar/>
        <Toolbar/>
      </div>
    );
  }
}

export default App;
