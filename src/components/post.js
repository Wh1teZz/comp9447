import React from 'react';
import axios from 'axios';

function Posts({ channel_id = '' }) {
    if (!channel_id){
        return
    }

    const token = window.sessionStorage.getItem('userToken');

    function getPosts({token='', channel_id=''}){
        const data = axios.get("API", {
            params: {
                token,
                channel_id
            }
        })
        .catch((err) => {})
        return data;
    }

    const posts = getPosts(token, channel_id);

    return (
        <li>
            {posts.slice().reverse()}
        </li>
    );

}

export default Posts;
