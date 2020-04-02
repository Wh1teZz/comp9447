import React, { useState, useEffect } from "react"
import axios from 'axios';

function Comments({ post_id = '' }) {

    const token = window.sessionStorage.getItem('userToken');

    const [comments, setComments] = useState(0)
    useEffect(() => {
        const data = axios.get("https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/posts/get/", {
            params: {
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uIjoicEMzd0hqc1pJRCIsImlhdCI6MTU4NTE5MDYyMi45NTgzNjEsImV4cCI6MTU4NTc5NTQyMi45NTgzNjcsInVzZXJJRCI6IjgwNWM0MTgzZjhkNjEyZDQ4MTBlYzc2OThkZTE5NDRjYjQ1NTdlODgwMDlmNTk2M2VlNjg3OTYxMGI0MGJkOGIifQ.sesVAhfxF8V4dgRBWzk9OQVvBK3S6thD4NAkXMV6rb0",
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
