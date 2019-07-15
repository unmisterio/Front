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
        axios.get('http://ec2-52-207-246-227.compute-1.amazonaws.com:3000/announcements/'+(this.props.match.params.idh))
      .then(res=>{   
        console.log(res);
         
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

        {/*var buff =  this.state.convocatoria.image
        var el = document.createElemrnt('img')
        imagen.src = 'data:image/jpeg;base64,' + buff.toString('base64')*/}

       
        var  imagen = this.state.convocatoria.image
        
        
        return(
            <div className="container" >
                
              <h4 className="center">{this.state.convocatoria.name} </h4><br/>
              <b>Imagen:   </b> {this.state.convocatoria.name} <br/>
              <b>Vacantes: </b> {this.state.convocatoria.vacant}<br/>
              <b>Descripcion: </b> {this.state.convocatoria.description}<br/>
              <b>Requisitos: </b><br/><br/>

              <ul>{recorrer}</ul>
              
             
              
              {/*<img src="image.src" alt="Girl in a jacket"/>*/}
             
             <button className="grey darken-3" > Aplicar </button>

            </div>
          );
    }
  

}

export default Announcement;
