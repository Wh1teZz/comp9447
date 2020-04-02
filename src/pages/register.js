import React,{useState} from 'react';
import Layout from "../components/layout"
import axios from 'axios';

const RegistraionForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const registerUser = async () => {
        if (password === confirmPassword){
            const result = await axios.post(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/register/`, {
                username,
                password,
                email
                //header is not required since the request is in plain text
            });
            const body = await result;
            if (body.status === 200){
                window.location.href='/';
            }
            else{
                setError(body.error)
            }
        }
        else{
            setError("Please make sure your passwords match");
        }
    }

    return (
      <Layout>
        <div id = "add-comment-form">
            <h3>Register Here!</h3>
            <small>{error}</small>
            <label>
                Email Id:
                <input type = "text" value = {email} onChange= {(event) => setEmail(event.target.value)} />
            </label>
            <br />
            <label>
                Username:
                <input type = "text" value = {username} onChange= {(event) => setUsername(event.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type = "password" value = {password} onChange= {(event) => setPassword(event.target.value)} />
            </label>
            <br />
            <label>
                Confirm Password:
                <input type = "password" value = {confirmPassword} onChange= {(event) => setConfirmPassword(event.target.value)} />
            </label>
            <br />
            <button onClick={registerUser}>Register</button> <br/><br/>
            <button onClick={event =>  window.location.href='/login'} >Login Instead</button>
        </div>
        </Layout>
    );
}

export default RegistraionForm;