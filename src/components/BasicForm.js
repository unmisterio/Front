import React from "react";
import Input from './Input'

const Form =()=> {
  return(
    
      <div className = "row" >
        <h1> Movilidad </h1>
        <h2>Personal Data</h2>
        <Input name="Full Name" description="Please fill in your first and last names exactly  as they appear on your identity document."/>
        
        <div className="row">
          <div className="col s6">
            <label>Type of Document:</label>
            <label>
              <input className="with-gap" name="group1" type="radio" id="CC" />
              <span htmlFor="CC">CC</span>
            </label>
            <label>
              <input className="with-gap" name="group1" type="radio" id="CE"/>
              <span htmlFor="CE">CE</span>
            </label>
            <label>
              <input className="with-gap" name="group1" type="radio" id="Pass" />
              <span htmlFor="Pass">Passport</span>
            </label>
          </div>
            
        </div>
          
        <Input name="ID Number" description="Blabla"/>
        <Input name="Place of Birth" description="Hola"/>

        <div className="row">
          <div className="input-field  col s6">
            <input type="text" className="datepicker"></input>
            <label htmlFor="Date of Birth">Date of Birth</label>  
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <label>Gender:</label>
            <label>
              <input className="with-gap" name="group2" type="radio" id="Male" />
              <span htmlFor="Male">Male</span>
            </label>
            <label>
              <input className="with-gap" name="group2" type="radio" id="Female"/>
              <span htmlFor="Female">Female</span>
            </label>
          </div>
        </div>
        <Input name="Email" description="Hola"/>
        <Input name="Residential Address" description="Hola"/>
        <Input name="City" description="Hola"/>
        <Input name="Phone" description="Hola"/>
        <Input name="Mobile" description="Hola"/>
      </div>
   
  )

}

export default Form;
