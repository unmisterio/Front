import React,{Component} from 'react';
import axios from 'axios';
import prueba from '../assets/prueba.png'


class Convocatorias extends Component{
  state={
    convocatorias:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res=>{
        this.setState({
          convocatorias:res.data.slice(0,5)
        })
      })
  }

  render(){
    const{convocatorias}=this.state;
    const convList=convocatorias.length?(
      convocatorias.map(convocatoria=>{
        return(
          <div className="card" key={convocatoria.id}>
              <div className="card-content row">
                  <div className="col s3"><img src={prueba} alt="" width='90%'/></div>
                     <div className="section">
                       <span className="card-title">{convocatoria.title}</span>
                       <p>{convocatoria.body}</p>
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
