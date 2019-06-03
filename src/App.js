import React from 'react';
import TestBPMN from './views/TestBPMN.js';
import Test from './views/Test.js';
import Info from './components/Info';
import Navbar from "./components/Navbar";
import ConvEst from "./components/ConvEst";
import Home from "./components/Home";
import Botones from './components/Botones'
//import Footer from "./components/Footer";
import { BrowserRouter, Route} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";


export default class App extends React.Component {

  componentDidMount() {
        M.AutoInit();
    }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <meta name="google-signin-client_id" content="331350514407-s7lkqidvng629hv05efpqhidvrcqev3m.apps.googleusercontent.com"></meta>
          <script src="https://apis.google.com/js/platform.js" async defer></script>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/camunda" component={TestBPMN} />
          <Route path="/info" component={Info} />
          <Route path="/convocatoria" component={ConvEst} />
          <Route path="/test" component={Botones} />
          {/*<Footer/>*/}
        </div>
      </BrowserRouter>
    );
  }

}
