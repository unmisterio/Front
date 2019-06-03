import React from "react";
import {Link} from 'react-router-dom'

const Navbar =()=> {
  return(
    <nav class="nav-wrapper grey darken-3">
        <div class="container" >
            <a className='brand-logo'>Intercambio UN</a>
            <ul class="right" >
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/info'>Informacion</Link></li>
                <li>Ingresar</li>
              </ul>
          </div>
      </nav>

    );

}

export default Navbar;
