import React, { Component } from 'react';
import './App.css';
import Nav from './containers/Nav.js'
import Page from './containers/Page.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Page />
      </div>
    );
  }
}

export default App;
