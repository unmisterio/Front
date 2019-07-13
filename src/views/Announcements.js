import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import prueba from '../assets/prueba.png'


class Announcements extends Component{
  constructor(){
    super();
    this.state={
      convocatorias:[],
      current: 1,
      perPage:5
    };
    this.handleClick=this.handleClick.bind(this);
  }
  
  handleClick(e) {
    this.setState({
      current: e.target.id
    });
  }

  /* Con conexion a nube de amazon*/
  componentDidMount(){
    axios.get('http://ec2-52-207-246-227.compute-1.amazonaws.com:3000/announcements?nRows=50')
      .then(res=>{
       
        this.setState({
          convocatorias:res.data
        })
      })
  } 


  render(){
    const{convocatorias,current,perPage}=this.state;

    const indexOfLast = current*perPage;
    const indexOfFirst= indexOfLast - perPage;
    const currentConv = convocatorias.slice(indexOfFirst,indexOfLast);
    const pageNumbers=[];
    for(let i =1;i<=Math.ceil(convocatorias.length/perPage);i++){
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
       <li className="waves-effect"  key={number}>
            <a id={number} onClick={this.handleClick}>{number}</a>
        </li> 
      );
    });

    const convList=convocatorias.length?(
      currentConv.map(convocatoria=>{
        return(
          
          <div className="card" key={convocatoria.idAnnouncement} id={convocatoria} >
              <div className="card-content row">
                  <div className="col s3"><img src={prueba} alt="" width='90%'/></div>
                     <div className="section" >
                     {/*<b>Nombre: </b> <span >{convocatoria.title}</span><br/>*/}
                      <b>Nombre: </b> <span >{convocatoria.name}</span><br/>
                      <b> Id: </b> <span>{convocatoria.idAnnouncement}</span><br></br>
                       <b>Modalidad: </b> <br/>
                       <div className="row">
                         <div className="col s6">
                            <b>Vacantes: </b> <span >{convocatoria.vacant}</span>
                        <div className="col">
                            <b>Aplicantes: </b> <br/>
                        </div>  
                         </div> 
                       </div>
                       
                       {/*<b id={convocatoria.idAnnouncement}  onClick={this.handleClick2} ><Link to={'/Convocatoria'+2}>Aplicar</Link> </b>*/}
                       <b id={convocatoria.idAnnouncement}  ><Link to={'Convocatoria/'+(convocatoria.idAnnouncement)}>Aplicar</Link> </b>
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

export default Announcements;
