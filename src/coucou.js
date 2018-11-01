import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Coucou extends Component {
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
          Coucou! <button onClick={this.ChocolatChaud}> Ca va? </button>
        </p>
      </div>
    );
  }
}

export default Coucou;
