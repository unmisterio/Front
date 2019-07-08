import React, {Component}from "react";
//import Form from "./Form";


class BaseForm extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col"><span>{this.props.formi}</span></div>
          <div className="col"><input type="user"  id="Degree" placeholder={this.props.formi}></input></div>
        </div>

      </div>
    );
  }


}

export default BaseForm;
