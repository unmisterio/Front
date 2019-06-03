import React from 'react';
import TestBPMN from './views/TestBPMN.js';
import Home from './views/Home.js';
import Info from './components/Info';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';


export default class App extends React.Component {


  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <meta name="google-signin-client_id" content="331350514407-s7lkqidvng629hv05efpqhidvrcqev3m.apps.googleusercontent.com"></meta>
          <script src="https://apis.google.com/js/platform.js" async defer></script>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={TestBPMN} />
          <Route path="/info" component={Info} />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }

}
