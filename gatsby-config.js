// Необходимо для чтения данных из .env файлов
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Code addict Gatsby.js course`,
    description: `Here is a description for the course`,
    author: `olg`,
  },
  plugins: [
    //Contentful
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    //images
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    //posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira Code`,
            variants: ["400", "600", "700"],
            subsets: [`latin`],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `700`],
            subsets: [`latin`],
          },
        ],
      },
    },
  ],
}
