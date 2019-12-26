module.exports = {
  siteMetadata: {
    title: `FnPlus Store`,
    description: `Merch by FnPlus`,
    author: `@fnplusofficial`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FnPlus Store`,
        short_name: `store`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/banner.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `${__dirname}/plugins/gatsby-source-shopify-storefront`,
      options: {
        siteName: 'fnplus-store',
        accessToken: '0cb5611e357df3ccbf6ad22e9e4c2cf0'
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://shop.fnplus.tech'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`
  ],
}
