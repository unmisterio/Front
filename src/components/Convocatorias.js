import React,{Component} from 'react';
import axios from 'axios';
import prueba from '../assets/prueba.png'


class Convocatorias extends Component{
  state={
    convocatorias:[]
  }

  componentDidMount(){
    axios.get('http://localhost:3000/announcements')
      .then(res=>{
        console.log(res);
        
        this.setState({
          convocatorias:res.data.slice(0,5)
        })
      })
  }

  /*componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res=>{
        this.setState({
          convocatorias:res.data.slice(0,5)
        })
      })
  }*/

  //https://jsonplaceholder.typicode.com/posts/
  render(){
    const{convocatorias}=this.state;
    const convList=convocatorias.length?(
      convocatorias.map(convocatoria=>{
        return(
          <div className="card" key={convocatoria.idAnnouncement}>
              <div className="card-content row">
                  <div className="col s3"><img src={prueba} alt="" width='90%'/></div>
                     <div className="section">
                       <b>Nombre: </b> <span >{convocatoria.targetUniversityInfo.name}</span><br/>
                       <b>Modalidad: </b> <br/>
                       <div className="row">
                         <div className="col s6">
                            <b>Vacantes: </b> <span >{convocatoria.vacant}</span>
                        <div className="col">
                            <b>Aplicantes: </b> <br/>
                        </div>  
                         </div> 
                       </div>
                     </div>
              </div>
          </div>
        )
      })
    ):(
      <div className="center">"No hay convocatorias"</div>
    )
    return(
      <div>
        {convList}
      </div>
    )
  }
}

export default Convocatorias;
