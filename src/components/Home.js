//Esta es la mia
import React from "react";
import Convocatorias from '../views/Announcements';
import Search from './Search'


const Home =()=>{
    return(
          <div className="container">
            <Search/>
            <Convocatorias />
      </div>
        );

}

export default Home;
