import React, { useState, useEffect } from "react"
import axios from 'axios';

function PostComments({ post_id = '' }) {

    const [token, setToken] = useState(undefined)

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    function getPostComments({token='', post_id=''}){
        const data = axios.get("API", {
            params: {
                token,
                post_id
            }
        })
        .catch((err) => {})
        return data;
    }

    const post_comments = getPostComments(token, post_id);

    return (
        <li>
            {post_comments.slice().reverse()}
        </li>
    );

}

export default PostComments;
