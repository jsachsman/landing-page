/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  flags: { PRESERVE_WEBPACK_CACHE: false },
  siteMetadata: {
    title: `CISA Training Environment`,
    siteUrl: `https://www.CISALearning.org`,
    description: `Landing page for the CISA Training Environment`,
  },
  plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `CISA Training Environment`,
      short_name: `CISA Training Environment`,
      start_url: `/`,
      background_color: '#f0f0f0',
      theme_color: '#1b6494',
      display: 'minimal-ui',
      icon: 'src/images/cisa_TE.png',
      description: `Landing page for the CISA Training Environment`,
      lang: `en`,
      crossOrigin: 'use-credentials',
    },
  }, `gatsby-plugin-react-helmet`,
],
}