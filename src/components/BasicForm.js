import React from "react";
import Input from './Input'

const Form =()=> {
  return(
    
      <div className = "row" >
        <h1> Movilidad </h1>
        <h2>Personal Data</h2>
        <Input name="Full Name"/>
        <Input name="ID Number"/>
        <Input name="Place of Birth"/>
        <Input name="Email"/>
        <Input name="Residential Address"/>
        <Input name="City"/>
        <Input name="Phone"/>
        <Input name="Mobile"/>
      </div>
   
  )

}

export default Form;
