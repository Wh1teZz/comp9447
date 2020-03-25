import React, { useState, useEffect } from "react"
import axios from 'axios';

function Comments({ post_id = '' }) {

    const token = window.sessionStorage.getItem('userToken');

    const [comments, setComments] = useState(0)
    useEffect(() => {
        const data = axios.get("API", {
            params: {
                token,
                post_id
            }
        })
        .then(function (response) {
            setComments(response.data)
        })
        .catch((err) => {})
        return data;
    })

    return (
        <li>
            {comments}
        </li>
    );

}

export default Comments;
