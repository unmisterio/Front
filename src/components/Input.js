import React, {Component}from "react";


class BaseConv extends Component {
  render(){
    return(
        <div className="row">
          <div className="col"><span>{this.props.name}</span></div>
          <div className="col"><input type="user"  id="Degree" placeholder={this.props.name}></input></div>
        </div>
    );
  }


}

export default BaseConv;
