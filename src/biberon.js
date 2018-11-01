import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Biberon extends Component {
    ChocolatChaud () {
        alert("Yo")
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Je suis un biberon ! <button onClick={this.ChocolatChaud}> oui </button>
        </p>
      </div>
    );
  }
}

export default Biberon;
