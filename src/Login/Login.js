import React from 'react';
import { Redirect  } from "react-router-dom";
import meme from './meme-papa-de-timmy.jpg';
import GoogleLogin from 'react-google-login';
import ReactDOM from 'react-dom';

export default class Login extends React.Component {
    
    constructor(props){
        super(props);
        this.redirectTo="";      
    }
    
    responseGoogle(res){
        console.log(res);
    }
    setRedirect(path){
        this.redirectTo=path;
    }

    onSignIn(googleUser) {

        //Enviar información al servidor
        var id_token = googleUser.getAuthResponse().id_token;
        console.log(id_token);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
          console.log(xhr.responseText);
        };
        let req = {};
        req.id_token = id_token;
        xhr.send(JSON.stringify(req));
    }

    render(){
        if(this.redirectTo==="login"){
            return <Redirect to='/login' ></Redirect>
        }else if(this.redirectTo==="test"){
            return <Redirect to='/test' ></Redirect>
        }
        return(
            <div>
            <h2>Login Component !!!</h2>
            <GoogleLogin
              clientId="331350514407-s7lkqidvng629hv05efpqhidvrcqev3m.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            
            </div>
        );
    }
}