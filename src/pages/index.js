import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/profile/">Go to profile</Link>
    <h1>it's a reddit clone</h1>
    <p>there's some content here</p>
    <p>probably limit to 20 articles on home page</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
  </Layout>
)

export default IndexPage
