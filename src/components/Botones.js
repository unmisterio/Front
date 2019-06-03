import React from "react";
import { Redirect  } from "react-router-dom";
import Login from './Login.js';
import M from "materialize-css";


class Botones extends React.Component {
  constructor(props) {
    super(props);
    this.redirectTo="";
  }

  componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

  setRedirect(path){
      this.redirectTo=path;
  }

  render(){

     if(this.redirectTo==="test"){
        return <Redirect to='/test' ></Redirect>
     }

    return(
      <div className="container">
        <div className="center">
            <Login />
            <br/>
            <a class="waves-effect waves-light btn" href='#/' onClick={()=> this.setRedirect("test")}>Testear Camunda</a>
            <br/>
        </div>
      </div>

    );
  }
}

export default Botones;
