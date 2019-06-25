import React, {Component}from "react";


class Input extends Component {
  render(){
    return(
        <div className="row">
          <div className="input-field col s6">
             <input type="text" className="validate" id={this.props.name} onChange={this.props.handle}></input>
              <label htmlFor={this.props.name}>{this.props.name}</label>     
          </div>
          <div className="input-field col ">
            <a className="btn tooltipped " data-position="right" data-tooltip={this.props.description}> 
              <i className="material-icons">help</i>
            </a>
          </div>
          
          
        </div>
    );
  }


}

export default Input;
