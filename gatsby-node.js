const path = require("path")

// Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allContentfulProduct.nodes.forEach(({ slug }) => {
    createPage({
      path: `/products/${slug}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug,
      },
    })
  })
}
