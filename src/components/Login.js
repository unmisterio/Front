import React from 'react';
import { Redirect  } from "react-router-dom";
import GoogleLogin from 'react-google-login';

export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.redirectTo="";
        this.state={
            clientId:"331350514407-s7lkqidvng629hv05efpqhidvrcqev3m.apps.googleusercontent.com",
            isLogued:false,
            user:{
                firstName:"",
                lastName:"",
                email:"",
                imageURL:"",
                role: ""
            }
        }
        this.responseGoogle = this.responseGoogle.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.logOut = this.logOut.bind(this);

        //check if the user is logged
        this.checkLogued();
    }

    checkLogued(){
        let sessionData = JSON.parse(sessionStorage.getItem("movilidadUser"));
        if(sessionData != null){
            this.setState({
              clientId:"331350514407-s7lkqidvng629hv05efpqhidvrcqev3m.apps.googleusercontent.com",
              isLogued:true,
              user: sessionData
            });
        }
    }

    logOut(){
        sessionStorage.clear();
        localStorage.clear();
        this.setState({
            isLogued:false
        })
    }

    responseGoogle(res){
        this.setState({
            isLogued:true,
            user:{
                firstName:res.profileObj.givenName,
                lastName:res.profileObj.familyName,
                email:res.profileObj.email,
                imageURL:res.profileObj.imageUrl,
                token: res.tokenId
            }
        });
        let token = res.tokenId;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://ec2-52-207-246-227.compute-1.amazonaws.com:3000/users');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('googleToken', token);
        xhr.onload = function() {
          console.log(xhr.response);
        };
        xhr.send();
        sessionStorage.setItem("movilidadUser",JSON.stringify(this.state.user));
    }

    responseGoogleErr(err){
        console.error(err);
    }
    setRedirect(path){
        this.redirectTo=path;
    }

    onSignIn(googleUser) {

        //Enviar información al servidor
        var id_token = googleUser.getAuthResponse().id_token;
        console.log(id_token);
        
    }

    render(){
        if(this.redirectTo==="login"){
            return <Redirect to='/login' ></Redirect>
        }else if(this.redirectTo==="test"){
            return <Redirect to='/test' ></Redirect>
        }
        return(
            <div>
                <div style={{ display: this.state.isLogued ? 'none' : 'block' }}>
                    <GoogleLogin
                    clientId={this.state.clientId}
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogleErr}
                    cookiePolicy={'single_host_origin'}
                    />
                </div>
                <div style={{ display: !this.state.isLogued ? 'none' : 'block' }}>
                <br/>
                    <h2>Bienvenido <br/>{this.state.user.firstName} {this.state.user.lastName}</h2>
                    <br/>
                    <a className="waves-effect waves-light btn"  href="/" onClick={this.logOut} >Log out</a>
                </div>
            </div>
        );
    }
}
