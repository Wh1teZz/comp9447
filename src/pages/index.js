import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Home = () => {
  
  // const [HW, setHW] = useState(0)
  // useEffect(() => {
  //   // get data from GitHub api
  //   fetch(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/`)
  //     .then(response => response.json()) // parse JSON from request
  //     .then(resultData => {
  //       setHW(resultData)
  //     }) // set data into HW
  // }, [])


  const HW = fetch(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/`)
      .then(response => response.json()) // parse JSON from request
      .catch(function(response) {
        console.log("fetch error:**********");
        console.log(response.message)
      });

  return (
  <Layout>
    <SEO title="Home" />
    <h1>it's a reddit clone</h1>
    <p>there's some content here</p>
    <p>probably limit to 20 articles on home page</p>
    <p>The result is: {HW.message}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
  </Layout>
  )

}

export default Home
