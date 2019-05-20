import React from 'react';
import { Redirect  } from "react-router-dom";

export default class CrearConvocatoria extends React.Component {
    
    constructor(props){
        super(props);
        this.redirectTo="";      
    }
    
    setRedirect(path){
        this.redirectTo=path;
    }

   

    render(){
        
        return(
            <div>
            <h2>CrearConvocatoria Component !!!</h2>
            ......................................
            
            </div>
        );
    }
}