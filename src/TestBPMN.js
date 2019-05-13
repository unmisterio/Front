import React from 'react';

export default class TestBPMN extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            result:[],
            url:"http://192.168.0.34:8080/engine-rest",
            processID:""
        };
        this.setState = this.setState.bind(this);
        this.instanceProcess = this.instanceProcess.bind(this);
        this.executeTask = this.executeTask.bind(this);
    }

    // call the API for a process instance
    instanceProcess(){
        let instanceURL = "http://192.168.0.34:8080/engine-rest/process-definition/key/Process_00xt1wz/start"
        let thebody ={
            "variables":{
                "amount":{
                "value":2500,
                "type":"Integer"
                },
                "item":{
                "value":"Colores prisma",
                    "type":"String"
                },
                "VB":{
                "value":"True",
                    "type":"String"
                }
            }
        };
        let data ={
            method:'POST',
            body:JSON.stringify(thebody),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        //this.setState({loading:true});
        fetch(instanceURL,data)
        .then(res => {
            if(res.ok){
                console.log(res);
                return res.json();
            } 
        } )
        .then(res =>{
            this.setState({
                result: res,
                loading:false
            });
            console.log(res);
        }).catch( error =>{ 
            console.log("hubo un error :"+ error.message);
        });
    }
    setField (e) {
        this.setState({[e.target.name]: e.target.value})
    }

    executeTask(){
        console.log("el estado es:  ");
        console.log(this.state);
    }
   
  render(){
    return (
        <div>
          <button onClick={this.instanceProcess}>
            Launch new Instance
          </button>
          <br></br>
           <br></br>
            Ejecutar tarea de una instancia de proceso:
            <br></br>
            <input type="text" onChange={(e)=> this.setField(e)} name="processID"></input>
            <br></br>
           <button onClick={this.executeTask} >
               Ejecutar
           </button>
        </div>
      );
  } 
}

