import React, {useState} from 'react';
import Layout from "../components/layout"
import axios from 'axios';


const LoginForm = () => {
    
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('')
    const [error, setError] = useState('');

    const checkLogin = async () => {
        if (username !== '' || password !== ''){
            console.log( { username: username, password : password});
            console.log(JSON.stringify({username:username, password:password}));
            const result = await axios.post(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/login/`, 
            JSON.stringify({
            username,
            password
            }));
            const body = await result;
            if (body.data.status === 200){
              window.sessionStorage.setItem('username', username);
              window.sessionStorage.setItem('userToken', body.token);
              window.location.href='/welcome';
            }
            else{
                setError(body.data.error)
            }
        }
        else{
            setError('Either username or password not filled');
        }
        
        
    };

    /*const username = window.sessionStorage.getItem('username');*/


    return (
      <Layout>
        <div id = "add-comment-form">
            <h3>Welcome! </h3>
            <small>{error}</small>
            <br />
            <label>
                Username:
                <input type = "text" value = {username} onChange= {(event) => setUsername(event.target.value)} required/>
            </label>
            <br />
            <label>
                Password:
                <input type = "password" value = {password} onChange= {(event) => setpassword(event.target.value)} />
            </label>
            <br />
            <button onClick={ checkLogin } >Login</button> <br/><br/>
            <button onClick={event =>  window.location.href='/register'} >Register</button>
        </div>
      </Layout>
    );
}

export default LoginForm;