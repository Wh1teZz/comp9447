import React, { useState, useEffect } from "react"
import axios from 'axios';
import { Link } from "gatsby"


function MakePost (channel_id = '') {

  const [values, setValues] = useState({
    currentText:'',
    currentTitle:''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const token = window.sessionStorage.getItem('userToken');

  function submitPost () {
    const message = values.currentText.trim();
    const title = values.currentTitle.trim();

    // Quick Validation
    if (!message || !title) return;

      axios.post(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/posts/create/`, {
        token,
        channel_id,
        message,
        title,
      })
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => { });
    };


    //    action='/'
  return (
  <body>
    <h1>
        Make a post
    </h1>
    <form noValidate onSubmit={submitPost} > 
      <input type="text"
        variant="outlined"
        margin="normal"
        required
        type="text"
        value={values.currentTitle}
        onChange={handleChange('currentTitle')}
      />
      <br />
      <input type="text"
        variant="outlined"
        margin="normal"
        required
        value={values.currentText}
        onChange={handleChange('currentText')}
      />
      <br />
      <button type="submit" variant="contained" color="primary">
        make post
      </button>
      <br />
      <Link to="/">Home</Link>
    </form>
  </body>
)
}

export default MakePost;