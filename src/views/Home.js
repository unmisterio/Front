import React from 'react';
import Sidebar from "../components/Sidebar";
import Sidebar2 from "../components/Sidebar2";
import Botones from '../components/Botones';


export default class Home extends React.Component {
    

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
