import React from "react"
import { Link } from "gatsby"
import axios from "axios"
import Layout from "../components/layout"
import SEO from "../components/seo"

//there is currently no way to view profile

function Profile () {

  const token = sessionStorage.getItem('userToken');

  if (!token){
    return (
    <Layout>
      <h1> you are not logged in </h1>
    </Layout>
    )
  }

  const profile_data = axios.get("API")

  return(
    <Layout>
      <SEO title="Profile" />
      <h1>this page is for your profile</h1>
      <p>something goes here i guess</p>
      <Link to="/">Go back to the home</Link>
    </Layout>
  );
}

export default Profile
