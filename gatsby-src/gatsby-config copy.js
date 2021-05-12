/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Reacto - The Reactive Tokens',
    description: `Reacto helps make static texts dynamic. 
    Reacto breathes life to plain old boring texts and make them alive`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`
  ],
  
}
