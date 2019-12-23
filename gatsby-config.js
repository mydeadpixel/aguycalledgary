require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `google-fonts-plugin`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`300`, `600`],
          },
          {
            family: `Playfair Display`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
  ],
}
