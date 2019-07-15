import React,{Component}from "react";
import {Link} from 'react-router-dom';
import M from 'materialize-css';


class Dropdown extends Component {

  componentDidMount() {
       let elems = document.querySelectorAll('.dropdown-trigger');
       M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
   }

  render(){
    return(
      <div >

        <a className='dropdown-trigger btn grey darken-3'  data-target={this.props.data}>{this.props.name}</a>

          <ul id={this.props.data} className='dropdown-content '>
            <li><Link to={"/"+ this.props.first}>{this.props.first}</Link></li>
            <li><Link to={"/"+ this.props.second}>{this.props.second}</Link></li>
          </ul>
      </div>
    );
  }


}

export default Dropdown;
