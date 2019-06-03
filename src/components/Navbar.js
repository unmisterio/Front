import React from "react";
import {Link} from 'react-router-dom'

const Navbar =()=> {
  return(
    <nav className="nav-wrapper grey darken-3">
        <div className="container" >
            <a className='brand-logo'>Intercambio UN</a>
            <ul className="right" >
                <li><Link to='/test'>Pruebas</Link></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/info'>Informacion</Link></li>
                <li><Link to='/convocatoria'>Convocatoria</Link></li>
                <li>Ingresar</li>
              </ul>
          </div>
      </nav>

    );

}

export default Navbar;
