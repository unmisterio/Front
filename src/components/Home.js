//Esta es la mia
import React from "react";
import Convocatorias from './Convocatorias';
import Search from './Search'


const Home =()=>{
    return(
          <div className="container">
            <div className="row">
              <form className="col s12">
                <div className="row">

                    <Search/>

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
            

      </div>
        );

}

export default Home;
