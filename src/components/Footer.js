import React from "react";

var phantom = {
    position: "fixed",
    bottom: "0",
    height: "9%",
    width: "100%",
    display: 'block',
}

const text={
  padding:"9%",
}
const Footer =()=> {

    return(
      <div style={phantom}>
        <footer className="page-footer grey darken-3">
          <div className="container ">
              <p className="center " style={text}>Todos los derechos reservados</p>
          </div>
       </footer>
      </div>
    );
  }

export default Footer;
