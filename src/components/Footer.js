import React from "react";

var phantom = {
    position: "fixed",
    bottom: "0",
    height: "9%",
    width: "100%",
    display: 'block',
}

const Footer =()=> {

    return(
      <div style={phantom}>
        <footer className="page-footer grey darken-3">
          <div className="container ">
              <p className="center " >Todos los derechos reservados</p>
          </div>
       </footer>
      </div>
    );
  }

export default Footer;
