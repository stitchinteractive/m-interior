require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteTitle: "M.INT",
    siteTitleDefault: "M.INT",
    siteUrl: "https://m-interior.co/",
    hrefLang: "en",
    siteDescription:
      "Find fun and freedom in transforming your spaces with our modular furniture series. Simply connect, stack and mount the blocks to build your own creative storage display.",
    siteImage: "/default-og-image.jpg",
    twitter: "@gatsbyjs",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: `https://${process.env.GATSBY_SHOPIFY_STORE_URL}/api/2022-07/graphql.json`,
        headers: {
          "X-Shopify-Storefront-Access-Token":
            process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
          Accept: "application/graphql",
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
