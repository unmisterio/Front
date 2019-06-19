import React from "react";
import Basic from './BasicForm'
import Input from './Input'

const Form =()=> {
  return(
    <div className="container">
        <Basic />
        <h2>Contact person in case of emergency</h2>
        <Input name="Name of the contact person" description="Hola"/>
        <Input name="Kinship" description="Hola"/>
        <Input name="Phone"  description="Hola"/>
        <Input name="Mobile"  description="Hola"/>
        <Input name="E-mail" description="Hola"/>

        <h2>Academic Information</h2>

        <div className="row">
          <div className="col s6">
            <select>
              <option value="" disabled selected>Institution of Origin</option>
              <option value="un">Universidad Nacional de Colombia</option>
            </select>
          </div> 
          <div className="col s6">
            <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
              <i className="material-icons">help</i>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <select>
              <option value="" disabled selected>Campus</option>
              <option value="1">Opcion 1</option>
              <option value="2">Opcion 2</option>
              <option value="3">Opcion 3</option>
            </select>
          </div> 
          <div className="col s6">
            <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
              <i className="material-icons">help</i>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <select>
              <option value="" disabled selected>Faculty</option>
              <option value="1">Opcion 1</option>
              <option value="2">Opcion 2</option>
              <option value="3">Opcion 3</option>
            </select>
          </div> 
          <div className="col s6">
            <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
              <i className="material-icons">help</i>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <select>
              <option value="" disabled selected>Curricular program</option>
              <option value="1">Opcion 1</option>
              <option value="2">Opcion 2</option>
              <option value="3">Opcion 3</option>
            </select>
          </div> 
          <div className="col s6">
            <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
              <i className="material-icons">help</i>
            </a>
          </div>
        </div>
        
        <Input name="P.A.P.A" description="Hola"/>
        <Input name="Director or Curricular Coordinator" description="Hola"/>
        <Input name="Phone of the Coordinator" description="Hola"/>
        <Input name="Email of the Coordinato" description="Hola"/>

        <h2>Information on Institution of Destination</h2>

        <div className="row">
          <div className="col s6">
            <select>
              <option value="" disabled selected>Institution</option>
              <option value="1">Opcion 1</option>
              <option value="2">Opcion 2</option>
              <option value="3">Opcion 3</option>
            </select>
          </div> 
          <div className="col s6">
            <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
              <i className="material-icons">help</i>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <label>Belongs to a Call:</label>
            <label>
              <input className="with-gap" name="group3" type="radio" id="Yes" />
              <span htmlFor="Yes">Yes</span>
            </label>
            <label>
              <input className="with-gap" name="group3" type="radio" id="No"/>
              <span htmlFor="No">No</span>
            </label>
          </div>
            <div className="col s6">
            <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
              <i className="material-icons">help</i>
            </a>
            </div>
        </div>

        <div className="row">
          <div className="col s6">
            <select>
              <option value="" disabled selected>Country</option>
              <option value="1">Opcion 1</option>
              <option value="2">Opcion 2</option>
              <option value="3">Opcion 3</option>
            </select>
          </div> 
          <div className="col s6">
            <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
              <i className="material-icons">help</i>
            </a>
          </div>
        </div>

        <Input name="City" description="Hola"/>
        <Input name="Faculty" description="Hola"/>
        <Input name="Curricular Program" description="Hola"/>
        <Input name="Contact at the Institution" description="Hola"/>
        <Input name="Position at the Institution" description="Hola"/>
        <Input name="Phone of the Contact" description="Hola"/>
        <Input name="Email of the Contact" description="Hola"/>

        <h2>Modality of the Mobility</h2>

        <div className="row">
          <div className="col s6">
            <select>
              <option value="" disabled selected>Modality</option>
              <option value="1">Opcion 1</option>
              <option value="2">Opcion 2</option>
              <option value="3">Opcion 3</option>
            </select>
          </div> 
          <div className="col s6">
            <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
              <i className="material-icons">help</i>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <label >
            <input type="checkbox" />
              <span>Extended </span>
              
            </label>
          </div> 

          <div className="col s6">
            <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
              <i className="material-icons">help</i>
            </a>
          </div>
        </div>
        

        <div className="divider"></div>
        <br/>

        <div className="row">
          <div className="input-field  col s6">
            <input type="text" className="datepicker"></input>
            <label htmlFor="Start Date">Start Date</label>  
          </div>
          <div className="col s6">
            <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
              <i className="material-icons">help</i>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="input-field  col s6">
            <input type="text" className="datepicker"></input>
            <label htmlFor="End Date">End Date</label>  
          </div>
          <div className="col s6">
            <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
              <i className="material-icons">help</i>
            </a>
          </div>
        </div>

        <Input name="Duration (in months)" description="Hola"/>

        <h2>Documents</h2>

        <div className="file-field input-field row">
          <div className="col s6">
            <div className="btn">
              <span>File</span>
              <input type="file"></input>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text"></input>
            </div>
          </div>

          <div className="col s6">
            <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
              <i className="material-icons">help</i>
            </a>
          </div>
          
        </div>

        <br/>
        <div className="row">
          <div className="col push-s6">
            <button className="btn grey darken-3">Enviar</button>
          </div>
        </div>
        
        
    </div>

  )

}

export default Form;
