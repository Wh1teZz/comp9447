import React from "react";
import axios from 'axios';

class Comments extends React.Component {

    //token = window.sessionStorage.getItem('userToken');
    state = {
        postInfo: [],
        comments: [],
    };

    componentDidMount() {
        this.getComments();
     }

    getComments = async (postID=this.props.postID) => {
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
        this.setState({comments:commentData})
    };

    // <ul>
    // <h1>{this.state.postInfo["title"]}</h1>
    // <small>{this.state.postInfo["time_posted"]}</small>
    // <p>{this.state.postInfo["text"]}</p>
    // </ul>

    // 


    render (){
        return (
        <ul> 
            {this.state.comments.length === 0 ?

                (<div>Loading...</div>)
                
                : 
                
                ([
                    <div>
                    <h1>{this.state.postInfo[0].title}</h1>
                    <small>{this.state.postInfo[0].time_posted}</small>
                    <p>{this.state.postInfo[0].text}</p>
                    <br/> <br/> <br/>
                    </div>,
                
                this.state.comments.map((c_id) => 
                    {
                        return <ul>
                            <div>
                                {c_id["userID"]}
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
