import React,{Component} from "react";
import axios from 'axios';
import { Redirect  } from "react-router-dom";
import { Link } from "fs";



class Announcement extends Component {

    constructor(){
        super();
        this.state={
          convocatoria:[],
          requisitos:[],
          redirect:false
        };
        this.aplicar = this.aplicar.bind(this);
        this.checkLogued = this.checkLogued.bind(this);
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
    aplicar(){
      let log = this.checkLogued();
      if (log){
        this.setState({
          redirect: true
        })
        
      }else{
        alert("Debe autenticarse antes de aplicar a alguna convocatoria");
      }
    }
    checkLogued(){
      let loged = false;
      let sessionData = JSON.parse(sessionStorage.getItem("movilidadUser"));
      if(sessionData != null){
          loged = true;
      }
      return loged;
    }
   

    render(){

      // redirection code

      const { redirect } = this.state;

      if (redirect) {
        return <Redirect to='/form'/>;
      }

        const   requisitos=this.state.requisitos
        let  cont=0
        const recorrer = requisitos.map(r => {
          
          return(
                
                    <li className="waves-effect" key={r.idRequirement}>
                         {r.description}   <br/>
                         
                         
                    </li> 
            );
        });
         //handle image...

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
             <div className="center">
              <button className="btn grey darken-3" onClick={this.aplicar} > Aplicar </button>
             </div>
             

            </div>
          );
    }
  

}

export default Announcement;
