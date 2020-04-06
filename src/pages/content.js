import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Comments from '../components/content';

const Content = ({location}) => (
  //1 for debugging
    <Layout>
      <SEO title="Page content" />
      <h1>Fetch from db</h1>
      <p>Fetch from db</p>
      <Comments postID={location.state.postID}/>
      <Link to="/">Go back to the home</Link>
    </Layout>
)

export default Content
