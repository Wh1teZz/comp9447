import React from "react"
import axios from 'axios'

class Channels extends React.Component {

    

    state = {
        channels: []
        };


     componentDidMount() {
        this.getChannels();
     }

    getChannels = async () => {
        // let token = window.sessionStorage.getItem('userToken');
        let res = await axios.get("https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/channel/get/");
        let data = Object.keys(res.data.channels).map((key) => res.data.channels[key]);
        this.setState({ channels: data });
    };

    render (){
        return (
        <ul> 
            {this.state.channels.length === 0 ?
            (<div>Loading...</div>):
            (this.state.channels.map((c_id) => {return <div>{c_id["channelName"]}</div>;}))
            }
        </ul>
        );
    }
}

export default Channels;
