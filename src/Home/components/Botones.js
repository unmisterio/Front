import React from "react";
import { Redirect  } from "react-router-dom";
import Login from '../../Login/Login.js';
import { Button,Imagen } from 'react-bootstrap';


class Botones extends React.Component {
  constructor(props) {
    super(props);
    this.redirectTo="";
  }

  setRedirect(path){
      this.redirectTo=path;
  }

  render(){

     if(this.redirectTo==="test"){
        return <Redirect to='/test' ></Redirect>
     }

    return(
      <div>
          <Login />
          <br/>
          <Button variant="primary" href='#/' onClick={()=> this.setRedirect("test")}>Testear Camunda</Button>
          <br/>
      </div>
    );
  }
}

export default Botones;
