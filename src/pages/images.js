import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

// Assets
import imgSrc from "../images/victor-grabarczyk.jpg"

// Components
import Layout from "../components/Layout"

const Images = () => {
  const { fixed, fluid, example } = useStaticQuery(graphql`
    {
      fixed: file(relativePath: { eq: "edwards-lee.jpg" }) {
        childImageSharp {
          # width 400 по дефолту
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      fluid: file(relativePath: { eq: "flouffy.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      example: file(relativePath: { eq: "flouffy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <section className="images">
        <article className="image">
          <h3>Basic image</h3>
          <img src={imgSrc} alt="basic image" />
        </article>
        <article className="image">
          <h3>Fixed image/Blur</h3>
          <Image fixed={fixed.childImageSharp.fixed} />
        </article>
        <article className="image">
          <h3>Fluid image/SVG</h3>
          <Image fluid={fluid.childImageSharp.fluid} />
          <div style={{ width: "100px" }}>
            <Image fluid={example.childImageSharp.fluid} />
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default Images
