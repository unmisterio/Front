import React from "react";
import Search from './Search'
import Dropdown from './Dropdown'
import Convocatorias from '../views/Announcements'


const Admin =()=> {
  return(

    <div className="container">
      <br/>
      <div className="row center">
          <div className="center">
            <div className="col push-s2" id='1'> <Dropdown name="Solicitudes" first="Aprobar" second="Devolver" third="Rechazar" data='drop1'/></div>
            <div className="col push-s5" id='2'> <Dropdown name="Convocatorias" first="Activas" second="Editar" third="Eliminar" data='drop2'/></div>
          </div>
      </div>
     <Search/>
    <Convocatorias />
    </div>
  );

}

export default Admin;
