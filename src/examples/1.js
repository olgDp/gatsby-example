import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <div>
      <h3>{title}</h3>
      <h3>{description}</h3>
    </div>
  )
}

export default ComponentName
