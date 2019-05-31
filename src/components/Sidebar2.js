import React from "react";
import { Navbar } from 'react-bootstrap';
import '../styles/App.css';

class Sidebar2 extends React.Component {


  render(){
    return(
      <div>
      <Navbar bg="dark" expand="lg" fixed="bottom" id="navbar"></Navbar>

      </div>
    );
  }
}

export default Sidebar2;
