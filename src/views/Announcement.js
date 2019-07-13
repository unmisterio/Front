import React,{Component} from "react";
import axios from 'axios';


class Announcement extends Component {

    constructor(){
        super();
        this.state={
          convocatoria:[],
          requisitos:[]
        };

    }

    componentDidMount(){
        axios.get('http://ec2-3-86-217-133.compute-1.amazonaws.com:3000/announcements/'+(this.props.match.params.idh))
      .then(res=>{    
        this.setState({
          convocatoria:res.data,
          requisitos:res.data.requirements
        })
        
      })
    }

    

    render(){

        const   requisitos=this.state.requisitos

        const recorrer = requisitos.map(r => {
            return(
                
                    <li className="waves-effect" key={r} >
                         {r.description}   <br/>
                    </li> 
            );
        });

        return(
            <div className="container" >
                
              <h4 className="center">{this.state.convocatoria.name} </h4><br/>
              <b>Vacantes: </b> {this.state.convocatoria.vacant}<br/>
              <b>Descripcion: </b> {this.state.convocatoria.description}<br/>
              <b>Requisitos: </b><br/><br/>
              <ul>{recorrer}</ul>
              
              
              
            </div>
          );
    }
  

}

export default Announcement;
