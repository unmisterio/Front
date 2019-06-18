import React from "react";
import Basic from './BasicForm'
import Input from './Input'

const Form =()=> {
  return(
    <div className="container">
        <Basic />
        <h2>Contact person in case of emergency</h2>
        <Input name="Name of the contact person"/>
        <Input name="Kinship"/>
        <Input name="Phone"/>
        <Input name="Mobile"/>
        <Input name="E-mail"/>
        <h2>Academic Information</h2>
        <Input name="P.A.P.A"/>
        <Input name="Director or Curricular Coordinator"/>
        <Input name="Phone of the Coordinator"/>
        <Input name="Email of the Coordinato"/>
        <h2>Information on Institution of Destination</h2>
        <Input name="City"/>
        <Input name="Faculty"/>
        <Input name="Curricular Program"/>
        <Input name="Contact at the Institution"/>
        <Input name="Position at the Institution"/>
        <Input name="Phone of the Contact"/>
        <Input name="Email of the Contact"/>
        <h2>Modality of the Mobility</h2>
        <div class="divider"></div>
        <br/>
        <Input name="Duration (in months)"/>
        <div className="container">
        <button className="btn grey darken-3">Enviar</button>
        </div>
        
    </div>

  )

}

export default Form;
