import React, { useState, useEffect } from "react"
import axios from 'axios';

function Posts({ channel_id = '' }) {
    if (!channel_id){
        return
    }

    const [token, setToken] = useState(undefined)

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

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

    var keys = Object.keys(posts.post.postID)
    var allPosts = keys.map((t) => 
                       posts.post.postID[t].map((e) => (
                            <div>
                              {e.author, e.score, e.title, e.type, e.text, e.time}
                            </div>
                          ))
                       );
    return (
        <li>
            {allPosts}
        </li>
    );

}

export default Posts;
