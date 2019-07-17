import React,{Component} from "react";
import Basic from './BasicForm'
import axios from 'axios';
import Input from './Input'
import listData from '../data/dataList.json';

class Form extends Component {

  constructor(){
    super();
    this.state={
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

    this.dataList = listData;
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

    
    axios.put("http://ec2-52-207-246-227.compute-1.amazonaws.com:3000/users?user=29 ",user)
  
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    
      console.log(mobility)
      axios.post("http://ec2-52-207-246-227.compute-1.amazonaws.com:3000/mobilityProcesses?user=29 ",mobility)
    
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

  onChange=(e)=>{
    this.setState({
      un_location:e.target.value
    })
  }

  onChange2=(e)=>{
    this.setState({
      un_faculty:e.target.value
    })
  }

  onChange3=(e)=>{
    this.setState({
      un_curricular_program:e.target.value
    })
  }
  render(){
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
        <h1> Movilidad </h1>
      <h2>Personal Data</h2>
      {/*<Input name="Full Name" />*/}
      <Input name="Type of Document" id="document_type" handle={this.handleChange}/>
      <Input name="ID Number" id="document_number" handle={this.handleChange}/>
      <Input name="Birth Place" id="birth_place" handle={this.handleChange}/>
      <Input name="Gender" id="gender" handle={this.handleChange}/>
      <Input name="Residential Address" id="address" handle={this.handleChange}/>
      <Input name="City" id="city" handle={this.handleChange}/>
      <Input name="Phone" id="phone" handle={this.handleChange}/>
      <Input name="Mobile" id="cellphone" handle={this.handleChange}/>
          <h2>Contact person in case of emergency</h2>
          <Input name="Name of the contact person" id="emergency_contact_name" handle={this.handleChange} />
          <Input name="Kinship" id="emergency_contact_relationship" handle={this.handleChange}/>
          <Input name="Phone" id="emergency_contact_phone" handle={this.handleChange} />
          <Input name="E-mail" id="emergency_contact_email" handle={this.handleChange}/>
  
          <h2>Academic Information</h2>
  
  <Input name="Announcement" id="idAnnouncement" handle={this.handleChange}/>

          <div className="row">
            <div className="col s6">
              <select onChange={this.onChange}>
                <option value="a" disabled select>Campus</option>
                {this.dataList.campus.map((item,index)=>{
                    return (<option value={item.id} key={item.id} > {item.name} </option>)
                  }
                )}
              </select>
            </div> 
                </div>

                <div className="row">
            <div className="col s6">
              <select onChange={this.onChange2}>
                <option value="a" disabled select>Faculty</option>
                {this.dataList.faculty.map((item,index)=>{
                    return (<option value={item.id} key={item.id} > {item.name} </option>)
                  }
                )}
              </select>
            </div> 
                </div>

                <div className="row">
            <div className="col s6">
              <select onChange={this.onChange3}>
                <option value="a" disabled select>Program</option>
                {this.dataList.program.map((item,index)=>{
                    return (<option value={item.id} key={item.id} > {item.name} </option>)
                  }
                )}
              </select>
            </div> 
                </div>
          <Input name="P.A.P.A" id="papa" handle={this.handleChange} />
          <Input name=" Curricular Coordinator" id="un_curricular_coordinator_name" handle={this.handleChange}/>
          <Input name="Phone of the Coordinator" id="un_curricular_coordinator_phone" handle={this.handleChange}/>
          <Input name="Email of the Coordinator" id="un_curricular_coordinator_email" handle={this.handleChange}/>
  
          <h2>Information on Institution of Destination</h2>
  
          <Input name="City" id="target_city" handle={this.handleChange} />
          <Input name="Faculty" id="target_faculty" handle={this.handleChange}/>
          <Input name="Program" id="target_curricular_program" handle={this.handleChange}/>
     
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
