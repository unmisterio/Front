import React, { Component } from 'react';
import './Rol.css'; 
 
class Rol extends Component {
  render() {
    return (      
      <div className="rol">
        <div className="rol__crud">
            <div className="rol__crud__container">
                <div className="rol__crud__item">Roles </div>
                <div className="rol__crud__item">Estudiante <input type="image" src={require('./Erase.png')} alt="Submit" width="15" height="15" /> </div> 
                <div className="rol__crud__item">Administrativo <input type="image" src={require('./Erase.png')} alt="Submit" width="15" height="15" /> </div>
                <div className="rol__crud__item">Coordinador <input type="image" src={require('./Erase.png')} alt="Submit" width="15" height="15" /> </div>
                <div className="rol__crud__item rol__crud__item--insert">
                    <input type="text"/> <img src={require('./Yes.png')} alt="Submit"/> 
                </div>
            </div>
        </div>

        <div className="rol__table">
            <div className="rol__table__main">
                <table>
                    <tr>
                        <th></th>
                        <th className="text--vertical">Estudiante</th>
                        <th className="text--vertical">Administrativo</th>
                        <th className="text--vertical">Coordinador</th>
                    </tr>

                    <tr>
                        <th className="table--title" colspan="4">
                            1. Informacion personal
                        </th>
                    </tr>
                    
                    <tr>
                        <td>1.1 Actualizar</td>
                        <td className="icon accept"> </td>
                        <td className="icon accept"> </td>
                        <td className="icon accept"> </td>
                    </tr>

                    <tr>
                        <th className="table--title" colspan="4">
                            2. Convocatorias
                        </th>
                    </tr>
                    
                    <tr>
                        <td>2. 1 Convocatorias vigentes</td>
                        <td className="icon accept"> </td>
                        <td>  </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td>2. 1 Actualizar</td>
                        <td className="icon accept"> </td>
                        <td>  </td>
                        <td>  </td>
                    </tr>
                </table>                
            </div>
        </div>
    </div>

    );
  }  
} 
export default Rol;