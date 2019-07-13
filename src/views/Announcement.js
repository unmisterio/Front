import React,{Component} from "react";
import Announcements from './Announcements';
import axios from 'axios';


class Announcement extends Component {

    constructor(){
        super();
        this.state={
          convocatoria:[]
        };

    }

    componentDidMount(){
        axios.get('http://ec2-3-86-217-133.compute-1.amazonaws.com:3000/announcements/2')
      .then(res=>{  
        this.setState({
          convocatoria:res.data
        })
      })
    }

    render(){
        
        return(
            <div className="container">
                
              <h4 className="center">Informacion</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda totam iste minus neque dicta! Commodi distinctio, dolor delectus rerum quia ut enim soluta sint, aspernatur cum omnis nihil ad est?</p>
            </div>
          );
    }
  

}

export default Announcement;
