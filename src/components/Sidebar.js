import React from "react";
import logo from '../assets/escudo.png';

class Sidebar extends React.Component {


  render(){
    return(
      <div>
<nav class="grey darken-3">
    <div class="nav-wrapper" >
      <ul class="left hide-on-med-and-down" >
        <li><img class="responsive-img" src={logo} alt=""></img></li>
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Informacion</a></li>
      </ul>
    </div>
  </nav>

      </div>
    );
  }
}

export default Sidebar;
