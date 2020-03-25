import React, { useState, useEffect } from "react"
import axios from 'axios';

function Posts({ channel_id = '' }) {

    const token = window.sessionStorage.getItem('userToken');

    const [posts, setPosts] = useState(0)
    useEffect(() => {
        axios.get("API", {
            params: {
                token,
                channel_id
            }
        })
        .then(function (response) {
            setPosts(response.data)
        })
        .catch((err) => {})
    })

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
