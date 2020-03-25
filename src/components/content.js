import React from 'react';
import axios from 'axios';

function PostComments({ post_id = '' }) {
    if (!post_id){
        return
    }

    const token = sessionStorage.getItem('userToken');

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
