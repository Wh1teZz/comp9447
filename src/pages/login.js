import axios from 'axios';
import React from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"

function LoginPage({ setAuth, ...props }) {

  const [values, setValues] = React.useState({
    username: '',
    password: '',
    });

    const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    };


  function handleSubmit(event) {
    event.preventDefault();

    // Quick validation
    if (!event.username || !event.password) return;

    // Send to backend
    axios.post(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/alpha/login`, { ...values })
      .then((response) => {
        console.log(response);
        const data = response.data;
        setAuth(data.token);
        props.history.push('/');
      })
      .catch((err) => {});
  }

  return (
      <Layout>
        <h1>
          Login
        </h1>
        <form noValidate onSubmit={handleSubmit}>
          <input
            variant="outlined"
            margin="normal"
            required
            type="text"
            onChange={handleChange('username')}
          />
            <br />
          <input
            variant="outlined"
            margin="normal"
            required
            type="password"
            onChange={handleChange('password')}
          />
            <br />
          <button type="submit" variant="contained" color="primary">
            Sign In
          </button>
              <br />
              <Link to ="/register/">
                Don't have an account? Register
              </Link>
        </form>
    </Layout>
  );
}

export default LoginPage;
