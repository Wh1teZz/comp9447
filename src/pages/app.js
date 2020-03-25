import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Login from "./login"

const App = () => (
  <Layout>
    <Router>
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App