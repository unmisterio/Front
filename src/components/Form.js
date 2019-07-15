import React,{Component} from "react";
import Basic from './BasicForm'
import axios from 'axios';
import Input from './Input'

class Form extends Component {

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

      idAnnouncement:null,
      un_location:null,
      un_faculty:null,
      un_curricular_program:null,
      papa:null,
      un_curricular_coordinator_name:null,
      un_curricular_coordinator_phone:null,
      un_curricular_coordinator_email:null,
      target_city:null,
      target_faculty:null,
      target_curricular_program:null,
    };
    {/*this.handleClick=this.handleClick.bind(this);*/}
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      carreer:this.state.carreer,
      birth: this.state.birth,
      document_number:this.state.document_number,
      document_type:this.state.document_type,
      birth_place:this.state.birth_place,
      gender:this.state.gender,
      address:this.state.address,
      city:this.state.city,
      phone:this.state.phone,
      cellphone:this.state.cellphone,
      emergency_contact_name:this.state.emergency_contact_name,
      emergency_contact_phone:this.state.emergency_contact_phone,
      emergency_contact_relationship:this.state.emergency_contact_relationship,
      emergency_contact_email:this.state.emergency_contact_email
    }

    let mobility ={
      idAnnouncement:this.state.idAnnouncement,
      un_location:this.state.un_location,
      un_faculty:this.state.un_faculty,
      un_curricular_program:this.state.un_curricular_program,
      papa:this.state.papa,
      un_curricular_coordinator_name:this.state.un_curricular_coordinator_name,
      un_curricular_coordinator_phone:this.state.un_curricular_coordinator_phone,
      un_curricular_coordinator_email:this.state.un_curricular_coordinator_email,
      target_city:this.state.target_city,
      target_faculty:this.state.target_faculty,
      target_curricular_program:this.state.target_curricular_program,
    }

    axios.put("http://ec2-52-207-246-227.compute-1.amazonaws.com:3000/users?user=15 ",user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    
      axios.post("http://ec2-52-207-246-227.compute-1.amazonaws.com:3000/mobilityProcesses?user=15 ",mobility)
      .then(res2 => {
        console.log(res2);
        console.log(res2.data);
      })
  }
  
  handleChange = (e) => {
    this.setState({ 
        [e.target.id]: e.target.value
    });
  }

  render(){


    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
        <h1> Movilidad </h1>
      <h2>Personal Data</h2>
      {/*<Input name="Full Name" />*/}
      <Input name="Type of Document" id="name" handle={this.handleChange}/>
      <Input name="ID Number" />
      <Input name="Date of  Birth" />
      <Input name="Birth Place" />
      <Input name="Gender"/>
      <Input name="Email" />
      <Input name="Residential Address" />
      <Input name="City" />
      <Input name="Phone" />
      <Input name="Mobile" />
          <h2>Contact person in case of emergency</h2>
          <Input name="Name of the contact person" />
          <Input name="Kinship" />
          <Input name="Phone"  />
          <Input name="Mobile"  />
          <Input name="E-mail" />
  
          <h2>Academic Information</h2>
  
          <div className="row">
            <div className="col s6">
              <select>
                <option value="" disabled select>Institution of Origin</option>
                <option value="1">Universidad Nacional de Colombia</option>
                <option value="2">Universidad de los Andes</option>
              </select>
            </div> 
          </div>
  
          <div className="row">
            <div className="col s6">
              <select>
                <option value="" disabled select>Campus</option>
                <option value="1">Opcion 1</option>
                <option value="2">Opcion 2</option>
                <option value="3">Opcion 3</option>
              </select>
            </div> 
          </div>
  
          <div className="row">
            <div className="col s6">
              <select>
                <option value="" disabled select>Faculty</option>
                <option value="1">Opcion 1</option>
                <option value="2">Opcion 2</option>
                <option value="3">Opcion 3</option>
              </select>
            </div> 
          </div>
  
          <div className="row">
            <div className="col s6">
              <select>
                <option value="" disabled select>Curricular program</option>
                <option value="1">Opcion 1</option>
                <option value="2">Opcion 2</option>
                <option value="3">Opcion 3</option>
              </select>
            </div> 
          </div>
          
          <Input name="P.A.P.A" />
          <Input name="Director or Curricular Coordinator" />
          <Input name="Phone of the Coordinator" />
          <Input name="Email of the Coordinato" />
  
          <h2>Information on Institution of Destination</h2>
  
          <div className="row">
            <div className="col s6">
              <select>
                <option value="" disabled select>Institution</option>
                <option value="1">Opcion 1</option>
                <option value="2">Opcion 2</option>
                <option value="3">Opcion 3</option>
              </select>
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
          </div>
  
          <div className="row">
            <div className="col s6">
              <select>
                <option value="" disabled select>Country</option>
                <option value="1">Opcion 1</option>
                <option value="2">Opcion 2</option>
                <option value="3">Opcion 3</option>
              </select>
            </div> 
          </div>
  
          <Input name="City" />
          <Input name="Faculty" />
          <Input name="Curricular Program" />
          <Input name="Contact at the Institution" />
          <Input name="Position at the Institution" />
          <Input name="Phone of the Contact" />
          <Input name="Email of the Contact" />
  
          <h2>Modality of the Mobility</h2>
  
          <div className="row">
            <div className="col s6">
              <select>
                <option value="" disabled select>Modality</option>
                <option value="1">Opcion 1</option>
                <option value="2">Opcion 2</option>
                <option value="3">Opcion 3</option>
              </select>
            </div> 
          </div>
  
          <div className="row">
            <div className="col s6">
              <label >
              <input type="checkbox" />
                <span>Extended </span>
                
              </label>
            </div>
          </div>
          
  
          <div className="divider"></div>
          <br/>
  
          <div className="row">
            <div className="input-field  col s6">
              <input type="text" className="datepicker"></input>
              <label htmlFor="Start Date">Start Date</label>  
            </div>
          </div>
  
          <div className="row">
            <div className="input-field  col s6">
              <input type="text" className="datepicker"></input>
              <label htmlFor="End Date">End Date</label>  
            </div>
          </div>
  
          <Input name="Duration (in months)" />
  
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
            
          </div>
  
          <br/>
          <div className="row">
            <div className="col push-s6">
              <button type="submit" className="btn grey darken-3">Enviar</button>
            </div>
          </div>
  
        </form>
          
          
          
      </div>
  
    )

  }
  

}

export default Form;
