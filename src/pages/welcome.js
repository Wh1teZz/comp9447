import React from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"


class WelcomePage extends React.Component {

    state = {
        username:"",
        userToken:""
    }

    componentDidMount () {
        this.setState({username:window.sessionStorage.getItem('username')});
        this.setState({userToken:window.sessionStorage.getItem('userToken')});
    }

     performLogout = async (userToken=this.state.userToken) => {
        const result = await fetch(`/logout`, {
            method: 'post',
            body: JSON.stringify({token: userToken}),
            //header is not required since the request is in plain text
        });
        window.sessionStorage.removeItem('username');
        window.sessionStorage.removeItem('userToken');
        window.location.href='/login'
    };

    render() {

    if (this.state.username === null){
        
        return (
        <Layout>
        <div>
            <p>You are not logged in</p>
        <Link to='/login'> Click here to login </Link>
        </div>
        </Layout>
        )
        
    }

    return (
        <Layout>
            <h1>Hello {this.state.username} , welcome to my social media site</h1>
            <p>
                Welcome to this page and happy sharing
            </p>
            <p>
                I'm still welcoming you
            </p>
            <button onClick={ this.performLogout } >Logout</button>
        </Layout>
    );
    }
} 

export default WelcomePage;