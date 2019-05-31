import React from 'react';
import Sidebar from "../components/Sidebar";
import Botones from '../components/Botones';


export default class Home extends React.Component {


    render(){

        return(
            <div>
            <Sidebar />
            <br/><br/><br/><br/><br/><br/><br/>
            <Botones />
            </div>
        );
    }
}
