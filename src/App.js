import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestBPMN from './TestBPMN.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!!!
        </p>
        <TestBPMN/>

      </header>
    </div>
  );
}

export default App;
