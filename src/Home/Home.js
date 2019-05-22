import React from 'react';
import { Redirect  } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Sidebar2 from "./components/Sidebar2";
import Botones from './components/Botones';
import { Image } from 'react-bootstrap';

export default class Home extends React.Component {
    constructor(){
        super();
    }

    render(){

        return(
            <div>
            <Sidebar />
            <br/><br/><br/><br/><br/><br/><br/>
            <Botones />
            <br/>
            <Sidebar2 />
            </div>
        );
    }
}
