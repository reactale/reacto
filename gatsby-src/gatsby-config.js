/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'rto.all.min.js', // Change to the script filename
      },
    },
  ],
  
}
