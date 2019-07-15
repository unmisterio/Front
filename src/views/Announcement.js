import React,{Component} from "react";
import axios from 'axios';
import { Redirect  } from "react-router-dom";


class Announcement extends Component {

    constructor(){
        super();
        this.redirectTo= "";
        this.state={
          convocatoria:[],
          requisitos:[]
        };
        this.aplicar = this.aplicar.bind(this);
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
      let log = checkLogued();
      if (log){
        this.setRedirect("formulario");
      }else{
        alert("Debe autenticarse antes de aplicar a alguna convocatoria");
      }
    }
    checkLogued(){
      loged = false;
      let sessionData = JSON.parse(sessionStorage.getItem("movilidadUser"));
      if(sessionData != null){
          loged = true;
      }
      return loged;
    }
    setRedirect(path){
      this.redirectTo=path;
  }

    render(){

      // redirection code
      if(this.redirectTo==="formulario"){
        return <Redirect to='/form' ></Redirect>
      }
      

      //handle image...
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
             
             <button className="grey darken-3" onClick={this.aplicar} > Aplicar </button>

            </div>
          );
    }
  

}

export default Announcement;
