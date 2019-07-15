import React from "react";
import {Link} from 'react-router-dom';
import Login from './Login';

const Navbar =()=> {
  return(
    <nav className="nav-wrapper grey darken-3">
        <div className="container" >
            {/*<a   className='brand-logo'>Intercambio UN</a>*/}
            <ul className="right" >
                {/*<li><Link to='/test'>Pruebas</Link></li>*/}
                <li><Link to='/'>Home</Link></li>
                {/*<li><Link to='/info'>Informacion</Link></li>*/}
                {/*<li><Link to='/form'>Formulario</Link></li>*/}
                <li><Link to='/role'>Asignar rol</Link></li>
                <li><Link to='/Mymobility'>Mis  procesos</Link></li>
                <li><Link to='/Annouadmin'>Procesos admin</Link></li>
                <li><Link to='/Process'>Buscar proceso</Link></li>
                <li><Login></Login></li>
              </ul>
          </div>
      </nav>

    );

}

export default Navbar;
