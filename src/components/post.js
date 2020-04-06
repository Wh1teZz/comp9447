import React from "react"
import axios from 'axios';
import { Link } from "gatsby";


class Posts extends React.Component {

    //token = window.sessionStorage.getItem('userToken');

    state = {
        posts: []
        };

     componentDidMount() {
        this.getPosts();
     }

     // 
     reMap = (key, value) =>
     {
         var out = {key:key, value:value};
         return out;
     }

    getPosts = async () => {
        let channelID = "1";
        let res = await axios.get("https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/posts/getlist/",
        {
            params: 
            {
                channelID: channelID
            }
        });
        
        if (res.data.status === 200){
        let data = Object.keys(res.data.posts).map((key) => this.reMap(key, res.data.posts[key]));
        this.setState({ posts: data });
        }
    };

    render (){
        return (
        <ul> 
            {this.state.posts.length === 0 ?
            (<div>Loading...</div>):
            (this.state.posts.map((c_id) => {
                return <div>
                    <Link to = {"/content/"} state={{postID:c_id.key}}>
                        {c_id.value["title"]}
                    </Link>
                    </div>;}))
            }
        </ul>
        );
    }
}

export default Posts;
