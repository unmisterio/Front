import React from 'react';
import './App.css';
import TestBPMN from '../TestBPMN/TestBPMN.js';
import Home from '../Home/Home.js';
import Login from '../Login/Login.js';
import { BrowserRouter as Router, Route} from "react-router-dom";
import CrearConvocatoria from '../CrearConvocatoria/CrearConvocatoria';


export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <meta name="google-signin-client_id" content="331350514407-s7lkqidvng629hv05efpqhidvrcqev3m.apps.googleusercontent.com"></meta>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <header >
          <h1>
            PROCESO DE MOVILIDAD V0.0.0.1
          </h1>
        </header>
      <div>
        <Login></Login>
      </div>
      <Router>
        <div>
        </div>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={TestBPMN} />
          <Route path="/crear" component={CrearConvocatoria} />
      </Router>
      </div>
    );
  }  
  
}
