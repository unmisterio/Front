import React from 'react';
import axios from 'axios';
import Search from '../components/Search'


class Role extends React.Component {

    constructor(){
        super();
        this.state={
            mail:null,
            people:[],
        }
        this.handleChange=this.handleChange.bind(this);
    }
   

    handleChange = (e)=>{
        this.setState({
            mail:e.target.value
        })
    }
    
    
    handleSubmit =(e)=>{
        e.preventDefault();
        let a=this.state.mail;
        console.log(a)
        axios.get('http://ec2-54-89-249-85.compute-1.amazonaws.com:3000/users?mail='+a)
          .then(res=>{
              console.log(res)
            this.setState({
              people:res.data
            })
          })
    }
    
    
    render(){

        return(
            <div className="container">

                <form onSubmit={this.handleSubmit}>
                    <Search id="mail" handle={this.handleChange}/>
                </form>

            <div className="card" key="">
                    <div className="card-content row">
                            <div className="section">
                            <b>Nombre: </b> <br/>
                            <b>Correo: </b> <br/>
                            <b>Rol: </b>  
                                
                            </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default  Role;
