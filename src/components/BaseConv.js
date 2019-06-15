import React, {Component}from "react";
import ConvEst from "./ConvEst";


class BaseConv extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col"><span>{this.props.name}</span></div>
          <div className="col"><input type="user"  id="Degree" placeholder={this.props.name}></input></div>
        </div>
      </div>
    );
  }


}

export default BaseConv;
