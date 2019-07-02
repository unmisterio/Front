import React, {Component}from "react";


class Datepicker extends Component {
  render(){
    return(
        <div className="row">
          
            <div className="input-field  col s6">
                <input type="text" className="datepicker" id="Fecha" onChange={this.handleChange}></input>
                 <label htmlFor="Start Date">Start Date</label>  
            </div>
                <div className="col ">
                    <a className="btn tooltipped " data-position="right" data-tooltip="Adios"> 
                     <i className="material-icons">help</i>
                    </a>
                </div>
          
        </div>
    );
  }


}

export default Datepicker;
