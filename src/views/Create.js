import React from 'react';
import axios from 'axios';
import Input from '../components/Input';
import Datepicker from '../components/Datepicker'

class Create extends React.Component {

  state = {

    idAnnouncement:null,
    name:null,
    description:null,
    vacant:null,
    releaseDate:null,
    closureDate:null,
    idTargetUniversity:null,
    limitDate:null,
    state: null,
    requirements: [
      {
        description2:null,
        name2:null
      }
    ]
  }

  handleChange = (e) => {
    this.setState({ 
        [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      idAnnouncement: this.state.idAnnouncement,
      name: this.state.name,
      description: this.state.description,
      vacant: this.state.vacant,
      releaseDate: this.state.releaseDate,
      closureDate: this.state.closureDare,
      idTargetUniversity: this.state.idTargetUniversity,
      limitDate: this.state.limitDate,
      state: this.state.state,
      requirements: [
        {
          description:this.state.description2,
          name:this.state.name2,
          idAnnouncement:this.state.idAnnouncement
        }
      ]
    };
   
    axios.post(`http://ec2-54-89-249-85.compute-1.amazonaws.com:3000/announcements`, user )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="container">
        <h2>Crear convocatoria</h2>
          <div className="center">
     
                <form onSubmit={this.handleSubmit}>

                    <Input name="ID" description="Blablabla" id="idAnnouncement" handle={this.handleChange}/>
                    <Input name="Nombre" description="Blablabla" id="name" handle={this.handleChange}/>
                    <Input name="Descripcion" description="Blablabla" id="description" handle={this.handleChange}/>
                    <Input name="Vacantes" description="Blablabla" id="vacant" handle={this.handleChange}/>
                    <Input name="Fecha apertura" description="Blablabla" id="releaseDate" handle={this.handleChange}/>
                    <Input name="Fecha cierra" description="Blablabla" id="closureDate" handle={this.handleChange}/>
                    <Input name="Fecha limite" description="Blablabla" id="limitDate" handle={this.handleChange}/>
                    <Input name="Id de universidad" description="Blablabla" id="idTargetUniversity" handle={this.handleChange}/>
                    <Input name="Estado" description="Blablabla" id="state" handle={this.handleChange}/>
                    <Input name="Requisito" description="Blablabla" id="name2" handle={this.handleChange}/>
                    <Input name="Descripcion" description="Blablabla" id="description2" handle={this.handleChange}/>

                  
                    <button type="submit" className="btn grey darken-3">Crear</button>
                </form>
          </div>
          
        
      </div>
    )
  }
}

export default Create;
