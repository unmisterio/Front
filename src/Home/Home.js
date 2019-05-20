import React from 'react';
import { Redirect  } from "react-router-dom";

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.redirectTo="";
    }
    setRedirect(path){
        this.redirectTo=path;
    }

    render(){
        if(this.redirectTo==="login"){
            return <Redirect to='/login' ></Redirect>
        }else if(this.redirectTo==="test"){
            return <Redirect to='/test' ></Redirect>
        }else if(this.redirectTo==="CrearConv"){
            return <Redirect to='/crear' ></Redirect>
        }
        return(
            <div>
            <h2>Home Component !!!</h2>

            <a href='#/' onClick={()=>this.setRedirect("login")}>Login</a><br></br>
            <br></br>
            <a href='#/' onClick={()=> this.setRedirect("test")}>Test</a><br></br>
            <br></br>
            <a href='#/' onClick={()=> this.setRedirect("CrearConv")}>Crear Convocatoria</a><br></br>
            <br></br>
            
            </div>
        );
    }
}