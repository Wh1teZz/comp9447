import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Profile" />
    <h1>this page is for your profile</h1>
    <p>something goes here i guess</p>
    <Link to="/">Go back to the home</Link>
  </Layout>
)

export default SecondPage
