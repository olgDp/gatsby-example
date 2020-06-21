import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Imported components
import Layout from "../components/Layout"
import ExampleComponent from "../examples/1"

// Main component
const Examples = () => {
  return (
    <Layout>
      <ExampleComponent />
    </Layout>
  )
}

export default Examples
