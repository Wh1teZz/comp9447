import React from "react";
import axios from 'axios';
import {Link} from "gatsby";

class Comments extends React.Component {

    state = {
        postInfo: [],
        comments: [],
        currComment: "",
        username:"",
        userToken:""
    };

    componentDidMount() {
        this.setState({username:window.sessionStorage.getItem('username')});
        this.setState({userToken:window.sessionStorage.getItem('userToken')});
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

        const token = window.sessionStorage.getItem('userToken');
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
            console.log("success", res.data.commentID);
            window.location.href='/channels';
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
