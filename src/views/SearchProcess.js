import React from 'react';
import axios from 'axios';
import Search from '../components/Search';
import Dropdown from '../components/Dropdown'


class SearchProcess extends React.Component {

    constructor(){
        super();
        this.state={
            mail:null,
            idA:null,
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
        axios.get('http://ec2-3-86-217-133.compute-1.amazonaws.com:3000/users?mail='+a)
          .then(res=>{
              console.log(res)
            this.setState({
              people:res.data
            })
          })
    }
    
    
    render(){

        return(
            
                <div className="row container">
                    <div className="col s6">
                        <form onSubmit={this.handleSubmit}>
                            <Search id="mail" handle={this.handleChange}/>
                        </form>
                    </div>
                   
                    <div className="col s6" id='1'> 
                        <Dropdown name="Procesos" first="Correo institucional" second="ID  convocatoria"  data='drop1'/>
                    </div> 

                    
                </div>

            
            
        );
    }
}

export default  SearchProcess;
