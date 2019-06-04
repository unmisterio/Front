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
        console.log(res);
        this.setState({
          convocatorias:res.data.slice(0,10)
        })
      })
  }

  render(){
    const{convocatorias}=this.state;
    const convList=convocatorias.length?(
      convocatorias.map(convocatoria=>{
        return(
          <div className="card" key={convocatoria.id}>
            <div className="card-content">
              <div className="row">
                  {/*<div className="col s3"><img src={prueba}/></div>*/}
                  <div className="col"><span className="card-title">{convocatoria.title}</span></div>
                  <div className="col"><p>{convocatoria.body}</p></div>
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
