import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Biberon from './biberon';
import Coucou from './coucou';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Biberon />
        <Coucou />
      </div>
    );
  }
}

export default App;
