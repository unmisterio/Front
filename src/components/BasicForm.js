import React,{Component} from "react";
import Input from './Input'

class BasicForm extends Component {

  constructor(){
    super();
    this.state={
      document_number:null,
      document_type:null,
      document_number:null,
      birth_place:null,
      gender:null,
      carreer:null,
      address:null,
      city: null,
      phone:null,
      cellphone:null,
      emergency_contact_name:null,
      emergency_contact_phone:null,
      emergency_contact_relationship:null,
      emergency_contact_email:null,
    };
    {/*this.handleClick=this.handleClick.bind(this);*/}
  }
render(){

  return(
    
    <div className = "row" >
      <h1> Movilidad </h1>
      <h2>Personal Data</h2>
      {/*<Input name="Full Name" />*/}
      <Input name="Type of Document"/>
      <Input name="ID Number" />
      <Input name="Date of  Birth" />
      <Input name="Birth Place" />
      <Input name="Gender"/>
      
     {/*<div className="row">
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
          
</div>*/}
        
      
      {/*<Input name="Place of Birth" />*/}
      

      {/*<div className="row">
        <div className="input-field  col s6">
          <input type="text" className="datepicker"></input>
          <label htmlFor="Date of Birth">Date of Birth</label>  
        </div> --->Falta un div*/}

     {/* <div className="row">
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
</div> */}
      <Input name="Email" />
      <Input name="Residential Address" />
      <Input name="City" />
      <Input name="Phone" />
      <Input name="Mobile" />
    </div>
 
)

}
  

}

export default BasicForm;
