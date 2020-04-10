import React from "react";
import axios from 'axios';
import { Link } from "gatsby";

class Channels extends React.Component {

    

    state = {
        channels: []
        };


    componentDidMount() {
    this.getChannels();
    }

    reMap = (key, value) =>
    {
        var out = {key:key, value:value};
        return out;
    }

    getChannels = async () => {
        // let token = window.sessionStorage.getItem('userToken');
        let res = await axios.get("https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/channel/get/");
        let data = Object.keys(res.data.channels).map((key) => this.reMap(key, res.data.channels[key]));
        this.setState({ channels: data });
    };

    render (){
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
