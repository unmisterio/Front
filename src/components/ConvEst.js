//Del otro grupo
import React from "react";
import avatarjpg from '../assets/avatar.jpg';
import BaseConv from './BaseConv';


const ConvEst =()=> {
  return(
    <div className="container">
      <h4 className="center">Convocatoria de estudiantes</h4>
    <br/>
    <div className="row">
      <div className="col s4"><img id = "imgAvatar" src = {avatarjpg} width = "80%" alt="" /></div>
      <div className="col">
          <BaseConv name="Carrera"/>
          <BaseConv name="Nombres"/>
          <BaseConv name="Apellidos"/>
      </div>
    </div>
      <div className="row">
        <div className="col push-s1"><button className="btn grey darken-3">Ajustes</button></div>
      </div>

    </div>
  );

}

export default ConvEst;
