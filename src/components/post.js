import React from "react"
import axios from 'axios';
import { Link } from "gatsby";


class Post extends React.Component {

    //token = window.sessionStorage.getItem('userToken');

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            username:"",
            userToken:""
        };
        this.reMap = this.reMap.bind(this);
        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount() {
        this.setState({username:window.sessionStorage.getItem('username')});
        this.setState({userToken:window.sessionStorage.getItem('userToken')});
        this.getPosts();
    }

     // 
    reMap = (key, value) =>
    {
        var out = {key:key, value:value};
        return out;
    }

    getPosts = async (channelID=this.props.channelID) => {
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
        if (this.state.username === null){
        
            return (
            <div>
                <p>You are not logged in</p>
            <Link to='/login'> Click here to login </Link>
            </div>)
            
        }

        return (
        <ul> 
            <Link to = {"/createPost/"} state={{channelID:this.props.channelID}}>
            <button type="button">
                make post
            </button>
            <br/> <br/> <br/>
            </Link>

            {this.state.posts.length === 0 ?
            (
                <div>
                    Loading...
                </div>):

            (this.state.posts.map((p_id) => {
                return <div>
                    <Link to = {"/content/"} state={{postID:p_id.key}}>
                        {p_id.value["title"]}
                    </Link>
                </div>;}))
            }
        </ul>
        );
    }
}

export default Post;
