import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './1_helloworld.js';
import FunctionalComponentExample from './2_functionalComponent.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          hello from the other side!
        </p>
        <HelloWorld />
        <FunctionalComponentExample />
      </div>
    );
  }
}

export default App;
