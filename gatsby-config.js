module.exports = {
  siteMetadata: {
    title: 'KeenOnDEV Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'KeenOnDEV Blog',
        short_name: 'KeenOnDEV',
        start_url: '/',
        background_color: '#FF5757',
        theme_color: '#FF5757',
        display: 'minimal-ui'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
