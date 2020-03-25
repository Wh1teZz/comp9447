import React, { useState, useEffect } from "react"
import axios from 'axios';

function Channels() {

    const token = window.sessionStorage.getItem('userToken');

    const [channels, setChannels] = useState(0)
    useEffect(() => {
        axios.get("API", {
            params: {
                token
            }
        })
        .then(function (response) {
            setChannels(response.data)
        })
        .catch((err) => {})
    })

    return (
        <form>

            {/* <button onClick={makePost}> 
                Make Post
            </button> */}
            <li>
                {channels}
            </li>
        </form>
    );

}

export default Channels;
