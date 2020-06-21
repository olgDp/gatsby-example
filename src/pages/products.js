import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

//Components
import Layout from "../components/Layout"

const Products = () => {
  const {
    allContentfulProduct: { nodes: products },
  } = useStaticQuery(graphql`
    {
      allContentfulProduct {
        nodes {
          id
          price
          title
          slug
          image {
            fluid(maxWidth: 640) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          slug
        }
      }
    }
  `)

  return (
    <Layout>
      <section className="products">
        {products.map(({ id, price, title, slug, image }) => (
          <div key={id} className="product">
            <Image fluid={image.fluid} />
            <h3>{title}</h3>
            <div>$ {price}</div>
            <Link to={`/products/${slug}`}>More info...</Link>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export default Products
