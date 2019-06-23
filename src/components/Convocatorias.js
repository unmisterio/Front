import React,{Component} from 'react';
import axios from 'axios';
import prueba from '../assets/prueba.png'


class Convocatorias extends Component{
  constructor(){
    super();
    this.state={
      convocatorias:[],
      current: 1,
      perPage:10
    };
    this.handleClick=this.handleClick.bind(this);
  }
  
  handleClick(e) {
    this.setState({
      current: Number(e.target.id)
    });
  }

  componentDidMount(){
    axios.get('http://localhost:3000/announcements')
      .then(res=>{
        console.log(res);
        
        this.setState({
          convocatorias:res.data.slice(0,5)
        })
      })
  }

  /*componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res=>{
        this.setState({
          convocatorias:res.data
        })
      })
  }*/

  //https://jsonplaceholder.typicode.com/posts/
  render(){
    const{convocatorias,current,perPage}=this.state;

    const indexOfLast = current*perPage;
    const indexOfFirst= indexOfLast - perPage;
    const currentConv = convocatorias.slice(indexOfFirst,indexOfLast);

    const renderConv  = currentConv.map((convocatorias,index)=>{
      return <li  key={index}>{convocatorias}</li>
    })

    const pageNumbers=[];
    for(let i =1;i<=Math.ceil(convocatorias.length/perPage);i++){
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
       <li className="waves-effect"  >
            <a key={number} id={number} onClick={this.handleClick}>{number}</a>
        </li> 
      );
    });

    const convList=convocatorias.length?(
      currentConv.map(convocatoria=>{
        return(
          <div className="card" key={convocatoria.idAnnouncement}>
              <div className="card-content row">
                  <div className="col s3"><img src={prueba} alt="" width='90%'/></div>
                     <div className="section">
                     {/*<b>Nombre: </b> <span >{convocatoria.title}</span><br/>*/}
                      <b>Nombre: </b> <span >{convocatoria.targetUniversityInfo.name}</span><br/>
                       <b>Modalidad: </b> <br/>
                       <div className="row">
                         <div className="col s6">
                            <b>Vacantes: </b> <span >{convocatoria.vacant}</span>
                        <div className="col">
                            <b>Aplicantes: </b> <br/>
                        </div>  
                         </div> 
                       </div>
                     </div>
              </div>
          </div>
        )
      })
    ):(
      <div className="center">"No hay convocatorias"</div>
    )
    return(
      <div>
        <ul>{convList}</ul>
        <div className="center">
          <ul className="pagination">
            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            {renderPageNumbers}
            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
          </ul> 
        </div>
        
      </div>
    )
  }
}

export default Convocatorias;
