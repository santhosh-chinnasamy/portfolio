module.exports = {
  siteMetadata: {
    siteUrl: "https://santhosh-chinnasamy.github.io",
    title: "Santhosh Chinnasamy",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Santhosh C`,
        short_name: `Santhosh Profile`,
        description: `Software Engineer`,
        start_url: `/`,
        background_color: `#0a68f0`,
        theme_color: `#0a68f0`,
        display: `standalone`,
        icon: "src/images/favicon.png",
        icons: [
          {
            src: `src/images/favicon.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-23RCSR2CMC", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-chatwoot`,
      options: {
        baseUrl: "https://app.chatwoot.com", // Required
        websiteToken: "sDoQCAaVY9UXdpbgPp8cGjEm", // Required
        includeInDevelopment: false, // Optional
        chatwootSettings: {}, // Optional
      },
    },
  ],
};
