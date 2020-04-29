import React from "react"
import axios from 'axios';
import { Link } from "gatsby"


class CreatePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      currentText:"",
      currentTitle:"",
      username:"",
      userToken:""
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  componentDidMount() {
    this.setState({username:window.sessionStorage.getItem('username')});
    this.setState({userToken:window.sessionStorage.getItem('userToken')});
  }

  onTitleChange = (event) => {
    this.setState({currentTitle: event.target.value });
  };

  onTextChange = (event) => {
    this.setState({currentText: event.target.value });
  };

  //token = window.sessionStorage.getItem('userToken');
  
  submitPost = async (event, 
    channelID=this.props.channelID, 
    text=this.state.currentText.trim(),
    title=this.state.currentTitle.trim(),
    ) => {
    const token = window.sessionStorage.getItem('userToken');

    // Quick Validation
    if (!text || !title) return;

    const res = await axios.post(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/posts/create/`, 
        JSON.stringify(
          {
            token,
            channelID,
            text,
            title
          }
        )
      )
      
      if (res.data.statusCode === 200){
        console.log("success", res.data.postID);
        window.location.href='/channels';
      }
  };


    //    action='/'
  render () { 
  if (this.state.username === null){
        
      return (
      <div>
          <p>You are not logged in</p>
      <Link to='/login'> Click here to login </Link>
      </div>)
      
  }


  return (
  <div>
    <h1>
        Make a post. Title: {this.state.currentTitle}
    </h1>
      <input type="text"
        variant="outlined"
        margin="normal"
        required
        type="text"
        value={this.state.currentTitle}
        onChange={this.onTitleChange}
      />
      <br />
      <input type="text"
        variant="outlined"
        margin="normal"
        required
        value={this.state.currentText}
        onChange={this.onTextChange}
      />
      <br />
      <button onClick={this.submitPost}>
        make post
      </button>
      <br />
    <Link to="/">Home</Link>
  </div>
  )}
}

export default CreatePost;