module.exports = {
  siteMetadata: {
    title: 'Aroha',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#FF506E',
        theme_color: '#FF506E',
        display: 'minimal-ui',
        icon: 'src/images/icon-aroha.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass'
  ],
}
