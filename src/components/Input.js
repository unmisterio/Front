import React, {Component}from "react";


class Input extends Component {
  render(){
    return(
        <div className="row">
          <div className="input-field col s6">
             <input type="text" className="validate" id={this.props.id} onChange={this.props.handle}></input>
              <label htmlFor={this.props.name}>{this.props.name}</label>     
          </div>
        </div>
    );
  }


}

export default Input;
