import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

//Assets
import cs from "./styles.module.scss"

//Components
import Layout from "../components/Layout"

const Product = ({ data }) => {
  const {
    product: {
      image: { fluid },
      title,
      price,
      info: { info },
    },
  } = data

  return (
    <Layout>
      <section className={cs.product}>
        <Image fluid={fluid} alt={title} />
        <article>
          <h3>{title}</h3>
          <h5>{price}</h5>
          <p>{info}</p>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Product($slug: String!) {
    product: contentfulProduct(slug: { eq: $slug }) {
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      price
      info {
        info
      }
    }
  }
`

export default Product
