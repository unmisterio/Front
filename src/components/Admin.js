import React from "react";
import Search from './Search'
import Dropdown from './Dropdown'
import Convocatorias from './Convocatorias'


const Admin =()=> {
  return(

    <div className="container">
      <br/>
      <div className="row center">
          <div className="center">
            <div className="col" id='1'> <Dropdown name="Solicitudes" first="Aprobar" second="Devolver" third="Rechazar"/></div>
            {/*<div className="col" id='2'> <Dropdown name="Convocatorias" first="Activas" second="Editar" third="Eliminar"/></div>*/}
          </div>
      </div>
     <Search/>
    <Convocatorias />
    </div>
  );

}

export default Admin;
