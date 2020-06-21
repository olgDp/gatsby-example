import React from "react"
import { Link } from "gatsby"

//Components
import Layout from "../components/Layout"

const Blog = () => {
  return (
    <Layout>
      <h1>This is our blog page</h1>
      <Link to="/">Go to home page</Link>
    </Layout>
  )
}

export default Blog
