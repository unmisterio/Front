import React from "react";
import { Link  } from "react-router-dom";
import Login from './Login.js';



const Botones =() =>{
    return(
      <div className="container">
        <div className="center">
            <br/><br/><br/><br/>
            <Login />
            <br/>
            <button className="btn grey darken-3"><Link to='/camunda'>Testear Camunda</Link></button>
            <br/>
        </div>
      </div>

    );
}

export default Botones;
