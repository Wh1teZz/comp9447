import React from "react"
import axios from 'axios';
import { Link } from "gatsby"


class CreateChannel extends React.Component {
    state = {
        currentChannelName:"",
        username:"",
        userToken:""
    }

    componentDidMount() {
        this.setState({username:window.sessionStorage.getItem('username')});
        this.setState({userToken:window.sessionStorage.getItem('userToken')});
    }

    onNameChange = (event) => {
        this.setState({ currentChannelName: event.target.value });
    };

    //token = window.sessionStorage.getItem('userToken');

    submitChannel = async (event, title=this.state.currentChannelName) => {
        const token = window.sessionStorage.getItem('userToken');
        // Quick Validation
        if (!title) return;
        const res = await axios.post(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/channel/create/`,
            JSON.stringify(
                {
                    token,
                    title
                }
            )
        )

        if (res.data.statusCode === 200) {
            console.log("success", res.data.channelID)
            window.location.href='/channels';
        }
    };


    //    action='/'
    render() {
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
                    Make a new channel. Title: {this.state.currentChannelName}
                </h1>
                <input type="text"
                    variant="outlined"
                    margin="normal"
                    required
                    type="text"
                    value={this.state.currentChannelName}
                    onChange={this.onNameChange}
                />
                <br />
                <button onClick={this.submitChannel}>
                    create new channel
                </button>
                <br />
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default CreateChannel;