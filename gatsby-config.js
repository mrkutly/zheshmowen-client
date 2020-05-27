module.exports = {
  siteMetadata: {
    title: `Zheshmowen`,
    description: `A space to learn our languages.`,
    author: `@sour_utley`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
			resolve: `gatsby-plugin-manifest`,
      options: {
				name: `zheshmowen`,
        short_name: `zheshmowen`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
