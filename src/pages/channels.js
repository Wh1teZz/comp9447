import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Channels from '../components/channels';

const Content = () => (
  //1 for debugging
    <Layout>
      <SEO title="Page content" />
      <h1>Fetch from db</h1>
      <p>Fetch from db</p>
      <Channels />
      <Link to="/">Go back to the home</Link>
    </Layout>
)

export default Content
