import React from "react";
import axios from 'axios';
import {Link} from "gatsby";

class Comments extends React.Component {

    //token = window.sessionStorage.getItem('userToken');
    state = {
        postInfo: [],
        comments: [],
        currComment: ""
    };

    componentDidMount() {
        this.getComments();
    }

    getComments = async (postID = this.props.postID) => {
        let res = await axios.get("https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/posts/get/",
            {
                params:
                {
                    postID: postID
                }
            });
        let postData = Object.keys(res.data.post).map((key) => res.data.post[key]);
        this.setState({ postInfo: postData });
        let commentData = Object.keys(res.data.comments).map((key) => res.data.comments[key]);
        this.setState({ comments: commentData })
    };

    onCurrCommentChange = (event) => {
        this.setState({ currComment: event.target.value })
    }

    submitComment = async ( event,
        postID = this.props.postID,
        comment = this.state.currComment) => {

        if (!comment) return;

        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uIjoiMHFQeXdTcmN2ayIsImlhdCI6MTU4NjIyNDkzNi45NzY0OCwiZXhwIjoxNTg2ODI5NzM2Ljk3NjQ4NiwidXNlcklEIjoiODA1YzQxODNmOGQ2MTJkNDgxMGVjNzY5OGRlMTk0NGNiNDU1N2U4ODAwOWY1OTYzZWU2ODc5NjEwYjQwYmQ4YiJ9.2ZMi4Btn8p1OZQjTciJlFVLr_ZFAQ2oNrH88yKQrw78";
        let res = await axios.post("https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/comments/create/",
            JSON.stringify(
                {
                    postID,
                    comment,
                    token
                }
            )
        )
        if (res.data.statusCode === 200) {
            console.log("success", res.data.commentID)
        }
    }

    // <ul>
    // <h1>{this.state.postInfo["title"]}</h1>
    // <small>{this.state.postInfo["time_posted"]}</small>
    // <p>{this.state.postInfo["text"]}</p>
    // </ul>

    // 


    render() {
        if (this.state.username === null){
        
            return (
            <div>
                <p>You are not logged in</p>
            <Link to='/login'> Click here to login </Link>
            </div>)
            
        }

        return (
            <ul>
                {this.state.postInfo.length === 0 ?

                    (<div>Loading...</div>)

                    :

                    ([
                        <div>
                            <h1>{this.state.postInfo[0].title}</h1>
                            <small>{this.state.postInfo[0].time_posted}</small>
                            <p>{this.state.postInfo[0].text}</p>
                            <br /> <br /> <br />
                        </div>,

                        <div>
                            <input type="text"
                                variant="outlined"
                                margin="normal"
                                required
                                value={this.state.currComment}
                                onChange={this.onCurrCommentChange}
                            />
                            <button onClick={this.submitComment}>
                                submit comment
                        </button>
                        </div>,

                        this.state.comments.map((c_id) => {
                            return <ul>
                                <div>
                                    <b>{c_id["username"]}</b>
                                </div>
                                <small>
                                    {c_id["time_posted"]}
                                </small>
                                <blockquote>
                                    {c_id["comment"]}
                                </blockquote>
                            </ul>
                        })
                    ])
                }
            </ul>
        );
    }
}

export default Comments;
