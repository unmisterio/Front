import React from 'react';

export default class TestBPMN extends React.Component {
    constructor(props){
        super(props);
        this.environment ={
            processEngineURL:"http://localhost:8080/engine-rest",
            processDeployKey:"Process_13052019",
        }
        this.state = {
            loading:false,
            processInstance:{},
            processID:"",
            taskID:"",
            tasks:[{
                name:"",
                created:"",
                assignee:"",
                id:""
            }]
        };
        this.setState = this.setState.bind(this);
        this.instanceProcess = this.instanceProcess.bind(this);
        this.executeTask = this.executeTask.bind(this);
        this.findTask = this.findTask.bind(this);
    }

    // call the API for a process instance
    instanceProcess(){

        //1. Set the URL
        let instanceURL = this.environment.processEngineURL+"/process-definition/key/"+this.environment.processDeployKey+"/start";
        //2. set the request body
        let thebody ={
            "variables":{
                amount:{
                value:2500,
                type:"Integer"
                },
                item:{
                    value:"receptor Bluetooth",
                    type:"String"
                },
                VB:{
                    value:"True",
                    type:"String"
                }
            }
        };
        //3. create a data object with the headers, method and body data
        let data ={
            method:'POST',
            body:JSON.stringify(thebody),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        // Optional: Make sure the user knows the app is waiting data from a server
        this.setState({loading:true});

        //4. Api call
        fetch(instanceURL,data)
        .then(res => {          //5.  handle a promise f the response
            if(res.ok){
                console.log(res);
                return res.json();  //5.1 parse the response if there is a response (review Camunda Docs)
            }
        } )
        .then(res =>{
            this.setState({         //update the local variables
                processInstance: res,
                loading:false
            });
            console.log(res);
        }).catch( error =>{         // handle error
            console.log("hubo un error al instanciar el proceso:"+ error.message);
        });
    }

    setField (e) {
        this.setState({[e.target.name]: e.target.value})
    }
    //Calls the Camunda API with the process ID on the URL
    findTask(){
        let taskURL = this.environment.processEngineURL+"/task?processInstanceId="+this.state.processID;
        let data ={
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }
        this.setState({loading:true});
        //Api call
        fetch(taskURL,data)
        .then(res => {
            if(res.ok){
                console.log(res);
                return res.json(); //parsing to JSON
            }
        })
        .then(res =>{               // Update the local variables with the response
            this.setState({
                tasks: res,
                loading:false
            });
            console.log(res);
        }).catch( error =>{         // handle error
            console.log("hubo un error al encontrar la tarea:"+ error.message);
        });
    }
    executeTask(){
        let taskURL = this.environment.processEngineURL+"/task/"+this.state.taskID+"/complete";
        let thebody ={
            "variables":{
                amount:{
                value:10500,
                type:"Integer"
                },
                item:{
                    value:"receptor Bluetooth V 5.0 ",
                    type:"String"
                },
                VB:{
                    value:"True",
                    type:"String"
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
        this.setState({loading:true});
        fetch(taskURL,data)
        .then(res => {
            if(res.ok){
                console.log(res);
                this.setState({
                    loading:false
                });
            }
        }).catch( error =>{
            console.log("hubo un error al terminar la tarea:"+ error.message);
        });
    }

  render(){
    return (
      <div className="container">
        <div className="App center">

            <div style={{ display: this.state.loading ? 'block' : 'none' }}>
            <h5>Consultando</h5>
            </div>
          <br/><br/>
          <button onClick={this.instanceProcess}>
            Lanzar nueva instancia
          </button>
          <br></br>
          El ID de instancia de proceso creado es :<br></br> {this.state.processInstance.id}
          <br></br>
           <br></br>
            Buscar tarea de una instancia de proceso:
            <br></br>
            <input type="text" onChange={(e)=> this.setField(e)} name="processID" placeholder="ID de Instancia" ></input>
            <br></br>
           <button onClick={this.findTask} >
               Buscar Tarea
           </button>
           <br></br>
           El proceso se encuentra pendiente en la tarea:
           <br></br>
           Nombre: {this.state.tasks[0].name}
           <br></br>
           ID: {this.state.tasks[0].id}
           <br></br>
           Creada: {this.state.tasks[0].created}
           <br></br>
           Asignada a: {this.state.tasks[0].assignee}
           <br></br>
           <br></br>
            Terminar una tarea dado el ID:
            <br></br>
            <input type="text" onChange={(e)=> this.setField(e)} name="taskID" placeholder="ID de Tarea" ></input>
            <br></br>
            <button onClick={this.executeTask} >
               Terminar Tarea
           </button>


        </div>

      </div>

      );
  }
}
