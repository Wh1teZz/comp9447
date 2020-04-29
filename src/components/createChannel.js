import React from "react"
import axios from 'axios';
import { Link } from "gatsby"


class CreateChannel extends React.Component {
    state = {
        currentChannelName:""
    }

    onNameChange = (event) => {
        this.setState({ currentChannelName: event.target.value });
    };

    //token = window.sessionStorage.getItem('userToken');

    submitChannel = async (event,
        title=this.state.currentChannelName
    ) => {
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uIjoiMHFQeXdTcmN2ayIsImlhdCI6MTU4NjIyNDkzNi45NzY0OCwiZXhwIjoxNTg2ODI5NzM2Ljk3NjQ4NiwidXNlcklEIjoiODA1YzQxODNmOGQ2MTJkNDgxMGVjNzY5OGRlMTk0NGNiNDU1N2U4ODAwOWY1OTYzZWU2ODc5NjEwYjQwYmQ4YiJ9.2ZMi4Btn8p1OZQjTciJlFVLr_ZFAQ2oNrH88yKQrw78";

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
            console.log("success", res.data.channelID);
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