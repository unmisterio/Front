//Del otro grupo
import React from "react";
import avatarjpg from '../assets/avatar.jpg'


const ConvEst =()=> {
  return(
    <div className="container">
      <h4 className="center">Convocatoria de estudiantes</h4>
    <br/>
    <div className = "col-3">
      <div className="secondbc col-4 divReg">
        <div id = "avatar" align = "left" className="containerReg">
          <div id="avatarjpg" className="col-3">
                <div>
                  <img id = "imgAvatar" src = {avatarjpg} alt="logohome" width = "30%" />
                </div>

          <div id = "info" align = "center" valign = "top" className="containerReg" width = "25%">
                        <div className = "col-10 centerdiv inputReg">
                                Nombres<input type="user" className="containerReg" id="inputUserName" placeholder="Nombres"
                                />
                        </div>
                        <div className="col-10 centerdiv inputReg">
                                Apellidos<input type="user" className="containerReg" id="Name" placeholder="Apellidos"
                                                  />
                        </div>
                        <div className="col-10 centerdiv inputReg">
                                Carrera  <input type="user" className="containerReg" id="inputUserName" placeholder="Carrera"
                                />
                        </div>
          </div>
          </div>
    </div>
    </div>



        <div id = "boton">
    						<div className="container">
              				<button className="btn comfortaa buttonLogin fivebc firstc">Ajustes</button>
            		</div>

    		</div>
    </div>
    </div>
  );

}

export default ConvEst;
