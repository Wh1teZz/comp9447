import axios from 'axios';
import { Link } from "gatsby"
import Layout from "../components/layout"
import React from 'react';

function RegisterPage({ setAuth, ...props }) {

  const [values, setValues] = React.useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    // Quick validation
    if (!values.username || !values.email || !values.password) return;

    // Send to backend
    axios.post(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/alpha/register`, { ...values })
      .then((response) => {
        console.log(response);
        const data = response.data;
        setAuth(data.token); //maybe u_id is needed , data.u_id
        props.history.push('/');
      })
      .catch((err) => {});
  }

  return (
    <Layout>
        <h1>
          Register
        </h1>
        <form noValidate onSubmit={handleSubmit}>
          <input type = "text"
            variant="outlined"
            margin="normal"
            required
            id="username"
            label="Username"
            name="username"
            type="text"
            autoFocus
            value={values.name_first}
            onChange={handleChange('username')}
          />
          <br />
          <input type = "text"
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
          />
          <br />
          <input type = "text"
            variant="outlined"
            margin="normal"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange('password')}
          />
          <br />
          <button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </button>
          <br />
          <Link to="/">Home</Link>
        </form>
    </Layout>
  )
}

export default RegisterPage;
