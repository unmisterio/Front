//Del otro grupo
import React from "react";
import avatarjpg from '../assets/avatar.jpg'


const ConvEst =()=> {
  return(
    <div className="container">
      <h4 className="center">Convocatoria de estudiantes</h4>
    <br/>
    <div className="row">
      <div className="col s4"><img id = "imgAvatar" src = {avatarjpg} width = "80%" alt="" /></div>
      <div className="col">
          <div className="row">
              <div className="col"><span>Carrera</span></div>
              <div className="col"><input type="user"  id="Degree" placeholder="Carrera"></input></div>
          </div>
          <div className="row">
                <div className ="col"><span>Nombres</span></div>
                <div className="col"><input type="user"  id="Name" placeholder="Nombres"/></div>
          </div>
          <div className="row">
                <div className ="col"><span>Apellidos</span></div>
                <div className="col"><input type="user"  id="Username" placeholder="Apellidos"/></div>
          </div>
      </div>
    </div>
      <div className="row">
        <div className="col push-s1"><button className="btn grey darken-3">Ajustes</button></div>
      </div>

    </div>
  );

}

export default ConvEst;
