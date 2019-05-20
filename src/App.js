import React from 'react';
import './App.css';
import TestBPMN from './components/TestBPMN.js';

class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            PROCESO DE MOVILIDAD V0.0.0.1
          </h1>
          <TestBPMN/>

        </header>
      </div>
    );
  }
  }


export default App;
