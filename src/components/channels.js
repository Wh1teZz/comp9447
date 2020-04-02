import React from "react"
import axios from 'axios'

class Channels extends React.Component {

    //token = window.sessionStorage.getItem('userToken');

    state = {
        channels: []
        };


     componentDidMount() {
        this.getChannels();
     }

    // const [channels, setChannels] = useState(0)
    // function GetChannels() {
    //     useEffect(() => {
    //         axios.get("https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/channel/get/", {
    //             token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uIjoicEMzd0hqc1pJRCIsImlhdCI6MTU4NTE5MDYyMi45NTgzNjEsImV4cCI6MTU4NTc5NTQyMi45NTgzNjcsInVzZXJJRCI6IjgwNWM0MTgzZjhkNjEyZDQ4MTBlYzc2OThkZTE5NDRjYjQ1NTdlODgwMDlmNTk2M2VlNjg3OTYxMGI0MGJkOGIifQ.sesVAhfxF8V4dgRBWzk9OQVvBK3S6thD4NAkXMV6rb0"
    //         })
    //             .then(function (response) {
    //                 setChannels(response.data)
    //                 console.log(channels["channels"][1]["channelName"])
    //             })
    //             .catch((err) => { console.log("error") })
    //     })
    // }

    getChannels = async () => {
        let res = await axios.get("https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/channel/get/",{
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uIjoicEMzd0hqc1pJRCIsImlhdCI6MTU4NTE5MDYyMi45NTgzNjEsImV4cCI6MTU4NTc5NTQyMi45NTgzNjcsInVzZXJJRCI6IjgwNWM0MTgzZjhkNjEyZDQ4MTBlYzc2OThkZTE5NDRjYjQ1NTdlODgwMDlmNTk2M2VlNjg3OTYxMGI0MGJkOGIifQ.sesVAhfxF8V4dgRBWzk9OQVvBK3S6thD4NAkXMV6rb0"
        });
        let data = Object.keys(res.data.channels).map((key) => res.data.channels[key]);
        this.setState({ channels: data });
    };
    // {this.state.map((c_id) => <li>{c_id["channelName"]}</li>) }
    //            (this.state.channels.map((c_id) => {return <div key=c_id>{c_id["channelName"]}</div>;}))
    //(this.state.channels.map((c_id, index) => {return <div key={c_id}>{index["channelName"]}</div>;}))
    //            (<div>{this.state.channels[1]["channelName"]}</div>)
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
