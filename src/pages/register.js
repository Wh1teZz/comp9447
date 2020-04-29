import React,{useState} from 'react';
import Layout from "../components/layout"
import axios from 'axios';

class RegistraionForm extends React.Component {

    state = {
        username:"",
        password:"",
        confirmPassword:"",
        email:"",
        error:""
    }

    onUsernameChange = (event) => {
        this.setState({username: event.target.value });
    };

    onPasswordChange = (event) => {
        this.setState({password: event.target.value });
    };

    onPasswordConfChange = (event) => {
        this.setState({confirmPassword: event.target.value });
    };

    onEmailChange = (event) => {
        this.setState({email: event.target.value });
    };

    registerUser = async (
        username=this.state.username,
        password=this.state.password,
        confirmPassword=this.state.confirmPassword,
        email=this.state.email,
    ) => {
        if (password === confirmPassword){
            const result = await axios.post(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/register/`, 
            JSON.stringify({
                username,
                password,
                email
                //header is not required since the request is in plain text
            }));
            const body = await result;
            if (body.status === 200){
                window.location.href='/login';
            }
            else{
                this.setState({error:body.error})
            }
        }
        else{
            this.setState({error:"Please make sure your passwords match"});
        }
    }

    render(){

    return (
      <Layout>
        <div id = "add-comment-form">
            <h3>Register Here!</h3>
            <small>{this.state.error}</small>
            <label>
                Email Id:
                <input type = "text" value = {this.state.email} onChange= {this.onEmailChange} />
            </label>
            <br />
            <label>
                Username:
                <input type = "text" value = {this.state.username} onChange= {this.onUsernameChange} />
            </label>
            <br />
            <label>
                Password:
                <input type = "password" value = {this.state.password} onChange= {this.onPasswordChange} />
            </label>
            <br />
            <label>
                Confirm Password:
                <input type = "password" value = {this.state.confirmPassword} onChange= {this.onPasswordConfChange} />
            </label>
            <br />
            <button onClick={this.registerUser}>Register</button> <br/><br/>
            <button onClick={event =>  window.location.href='/login'} >Login Instead</button>
        </div>
      </Layout>
    );
    }
}

export default RegistraionForm;