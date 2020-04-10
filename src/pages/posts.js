import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from '../components/post';

const Posts = ({location}) => (
  //1 for debugging
    <Layout>
      <SEO title="Posts" />
      <h1>Fetch from db</h1>
      <p>Fetch from db</p>
      <Post channelID={(location.state || {}).channelID}/>
      <Link to="/">Go back to the home</Link>
    </Layout>
)

export default Posts
