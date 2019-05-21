import React from "react";
import { Navbar,Nav} from 'react-bootstrap';
import escudo from './escudo.png';

class Sidebar extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
      <Navbar bg="dark" expand="lg">
  <Navbar.Brand href=""> <img src={escudo} height="70" width="150" ></img> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
      <Nav.Link href="#home" >Home</Nav.Link>
      <Nav.Link href="#link" >Informacion</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>

      </div>
    );
  }
}

export default Sidebar;
