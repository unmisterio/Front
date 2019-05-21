import React from "react";
import { Navbar } from 'react-bootstrap';
import escudo from './escudo.png';
import '../../App/App.css';

class Sidebar2 extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
      <Navbar bg="dark" expand="lg" fixed="bottom" id="navbar"></Navbar>

      </div>
    );
  }
}

export default Sidebar2;
