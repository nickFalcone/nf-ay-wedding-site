module.exports = {
  siteMetadata: {
    title: `Nick & Alesa's wedding`,
    description: `The wedding website of Nick Falcone & Alesa Yuodsnukis`,
    author: `@nickFalcone`,
    siteUrl: `https://www.nickandalesa.com`,
    url: `https://www.nickandalesa.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Dancing Script`,
            subsets: [`latin`],
          }
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nick-and-alesas-wedding`,
        short_name: `nf-ay-wedding`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143613685-1",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://maps.googleapis.com",
          "https://google-analytics.com",
          "https://google.com",
          "https://marketingplatform.google.com",
          "https://openweathermap.org",
          "https://www.williams-sonoma.com"
        ]
      }
    },
  ],
}
