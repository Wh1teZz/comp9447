import React from "react";
import axios from 'axios';
import { Link } from "gatsby";

class Channels extends React.Component {

    state = {
        channels: [],
        username:"",
        userToken:""
        };


    componentDidMount() {
    this.setState({username:window.sessionStorage.getItem('username')});
    this.setState({userToken:window.sessionStorage.getItem('userToken')});
    this.getChannels();
    }

    reMap = (key, value) =>
    {
        var out = {key:key, value:value};
        return out;
    }

    getChannels = async () => {
        let res = await axios.get("https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/channel/get/");
        let data = Object.keys(res.data.channels).map((key) => this.reMap(key, res.data.channels[key]));
        this.setState({ channels: data });
    };

    render (){
        if (this.state.username === null){
        
            return (
                <div>
                    <p>You are not logged in</p>
                    <Link to='/login'> Click here to login </Link>
                    <br/><br/><br/>
                </div>
            )
            
        }

        return (
        <ul> 
            <div>
                <Link to = {"/createChannel/"}>
                    <button type="button">
                        create a new channel
                    </button>
                </Link>
            </div>
            <br /> <br /> <br />
            {this.state.channels.length === 0 ?
            (<div>Loading...</div>):
            (this.state.channels.map((c_id) => 
                {return <div>
                    <Link to = {"/posts/"} state={{channelID:c_id.key}}>
                        {c_id.value["channelName"]}
                    </Link>
                </div>
                }))
            }
        </ul>
        );
    }
}

export default Channels;
