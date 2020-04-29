import React, { useState, useEffect } from "react"
import axios from 'axios';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Home = () => {

  const [HW, setHW] = useState(0)
  useEffect(() => {
    axios.get('https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/')
      .then(function (response) {
        setHW(response.data)
      })
  })

  return (
    <Layout>
      <SEO title="Home" />
      <h1>it's a reddit clone</h1>
      <p>there's some content here</p>
      <p>sanity check for api gateway and lambda:</p>
      <p>{HW}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
    )


  // return (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>it's a reddit clone</h1>
  //   <p>there's some content here</p>
  //   <p>probably limit to 20 articles on home page</p>
  //   <p>The result is: {HW}</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
    
  // </Layout>
  // )

}

export default Home
