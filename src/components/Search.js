import React from "react";


class Search extends React.Component {
  render(){
    return(
      <div className="row">
        <div className="input-field col s4">
          <i className="material-icons prefix">search</i>
          <input id={this.props.id} type="text" className="validate"onChange={this.props.handle}></input>
          <label htmlFor="icon_prefix">search</label>
        </div>
      </div>
        
    );

  }
  

}

export default Search;
