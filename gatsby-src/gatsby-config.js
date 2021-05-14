/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Reacto - Makes Text Reactive',
    description: `This website is about Reacto, the sub project of Reactale. Reacto is a small token that can be embedded in static text to make it dynamic / reactive.`,
    author: 'Suman Barick'
  },
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/rto.all.min.js', // Change to the script filename
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`
  ],
  
}
