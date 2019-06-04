import React,{Component}from "react";
import {Link} from 'react-router-dom';


class Dropdown extends Component {
  render(){
    return(
      <div className="container">

        <a className='dropdown-trigger btn grey'  data-target='dropdown1'>{this.props.name}</a>

          <ul id='dropdown1' className='dropdown-content '>
            <li><Link to={"/"+ this.props.firs}>{this.props.first}</Link></li>
            <li><Link to={"/"+ this.props.second}>{this.props.second}</Link></li>
            <li><Link to={"/"+ this.props.third}>{this.props.third}</Link></li>
          </ul>
      </div>
    );
  }


}

export default Dropdown;
