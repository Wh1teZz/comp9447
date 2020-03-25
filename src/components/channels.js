import React from 'react';
import axios from 'axios';

function Channels() {

    const token = sessionStorage.getItem('userToken');

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
