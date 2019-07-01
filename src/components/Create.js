import React from 'react';
import axios from 'axios';
import Input from './Input';

class Create extends React.Component {
  state = {
    Nombre:null,
    Descripcion:null,
    Vacantes:null,
    Fecha:null,
    Fecha2:null
  }

  handleChange = (e) => {
    this.setState({ 
        [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      Nombre: this.state.Nombre,
      Descripcion: this.state.Descripcion,
      Vacantes: this.state.Vacantes,
      Fecha: this.state.Fecha,
      Fecha2: this.state.Fecha2
    };
    
    /*
    Prueba de funcionamiento
    let test = {
      "id": 121455,
      "name": "Test100",
      "description": "Just for testing 3",
      "vacant": 5,
      "releaseDate": "0000-00-00",
      "closureDate": "0000-00-00",
      "targetUniversityInfo": {
        "idTarget_University": 3,
        "name": "RockBall University",
        "description": "Is devoted to excellence in teaching"
    }

    axios.post(`http://localhost:3000/announcements`, test )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  };*/

    axios.post(`https://jsonplaceholder.typicode.com/users`, user )
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
                    <Input name="Nombre" description="Blablabla" handle={this.handleChange}/>
                    <Input name="Descripcion" description="Blablabla" handle={this.handleChange}/>
                    <Input name="Vacantes" description="Blablabla" handle={this.handleChange}/>

                  <div className="row">
                    <div className="input-field  col s6">
                      <input type="text" className="datepicker" id="Fecha" onChange={this.handleChange}></input>
                      <label htmlFor="Start Date">Start Date</label>  
                    </div>
                    <div className="col ">
                      <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
                        <i className="material-icons">help</i>
                      </a>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field  col s6">
                     <input type="text" className="datepicker" id="Fecha2" onChange={this.handleChange}></input>
                      <label htmlFor="End Date">Start Date</label>  
                    </div>
                    <div className="col ">
                      <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
                        <i className="material-icons">help</i>
                      </a>
                    </div>
                </div>


                    <button type="submit" className="btn grey darken-3">Crear</button>
                </form>
          </div>
          
        
      </div>
    )
  }
}

export default Create;
