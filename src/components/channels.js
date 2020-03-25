import React, { useState, useEffect } from "react"
import axios from 'axios';

function Channels() {

    const [token, setToken] = useState(undefined)

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    function getChannels({token=''}){
        const data = axios.get("API", {
            params: {
                token
            }
        })
        .catch((err) => {})
        return data;
    }

    const channels = getChannels(token);

    return (
        <li>
            {channels.slice().reverse()}
        </li>
    );

}

export default Channels;
