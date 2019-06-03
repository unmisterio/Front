//Esta es la mia
import React from "react";
import axios from 'axios';
import Convocatorias from './Convocatorias';
import Paginacion from './Paginacion'


const Home =()=>{
    return(
          <div className="container">
            <div className="row">
              <form className="col s12">
                <div className="row">

                    <div className="input-field col s4">
                      <i className="material-icons prefix">search</i>
                      <input id="icon_prefix" type="text" className="validate"></input>
                      <label htmlFor="icon_prefix">search</label>
                    </div>

                    <div className="right">
                      <div className="col">
                        <p>
                          <label>
                            <input type="checkbox" />
                            <span>Filtro 1</span>
                          </label>
                        </p>
                      </div>
                      <div className="col">
                        <p>
                          <label>
                            <input type="checkbox" />
                            <span>Filtro 2</span>
                          </label>
                        </p>
                      </div>
                    </div>

                </div>
            </form>
        </div>

            <Convocatorias />

{/*Paginacion*/}
            <Paginacion />

      </div>
        );

}

export default Home;
