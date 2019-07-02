import React from 'react';
import TestBPMN from './views/TestBPMN.js';
import Info from './components/Info';
import Navbar from "./components/Navbar";
import ConvEst from "./components/ConvEst";
import Home from "./components/Home";
import Botones from './components/Botones';
import Admin from './components/Admin';
import Form from './components/Form';
import Create from './views/Create'
import { BrowserRouter, Route,Switch} from "react-router-dom";
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/camunda" component={TestBPMN} />
              <Route path="/info" component={Info} />
              <Route path="/test" component={Botones} />
              <Route path="/estudiante" component={ConvEst} />
              <Route path="/admin" component={Admin} />
              <Route path="/Aprobar" component={Info} />
              <Route path="/Devolver" component={Info} />
              <Route path="/Rechazar" component={Info} />
              <Route path="/Activas" component={Info} />
              <Route path="/Editar" component={Info} />

              <Route path="/Eliminar" component={Info} />
              <Route path="/form" component={Form} />
              <Route path="/create" component={Create} />

            </Switch>

          {/*<Footer/>*/}
        </div>
      </BrowserRouter>
    );
  }

}
