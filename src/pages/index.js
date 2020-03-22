import React, { useState, useEffect } from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  
  const [HW, setHW] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setHW(resultData)
      }) // set data for the number of stars
  }, [])

  return (
  <Layout>
    <SEO title="Home" />
    <Link to="/profile/">Go to profile</Link>
    <h1>it's a reddit clone</h1>
    <p>there's some content here</p>
    <p>probably limit to 20 articles on home page</p>
    <p>The result is: {HW}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
  </Layout>
  )

}

export default IndexPage