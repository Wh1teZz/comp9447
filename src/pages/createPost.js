import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import CreatePost from "../components/createPost"

const createPostPage = ({location}) => {
  return(
    <Layout>
      <CreatePost channelID={location.state.channelID}/>
    </Layout>
  )
}

export default createPostPage;