import React from 'react';
import './styles/App.css';
import TestBPMN from './views/TestBPMN.js';
import Home from './views/Home.js';
import { BrowserRouter as Router, Route} from "react-router-dom";


export default class App extends React.Component {


  render(){
    return (
      <div className="App">
        <meta name="google-signin-client_id" content="331350514407-s7lkqidvng629hv05efpqhidvrcqev3m.apps.googleusercontent.com"></meta>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <header >
        </header>

      <Router>
        <div>
        </div>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={TestBPMN} />
      </Router>
      </div>
    );
  }

}
