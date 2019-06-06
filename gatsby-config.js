module.exports = {
  siteMetadata: {
    title: `Jakub Sarnowski - Software Engineer`,
    description: `Top-notch software solutions. Creating robust, intuitive and beautiful products. My clients' success is my success, together we can deliver amazing services.`,
    author: `@sarneeh`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#8F034F`,
        theme_color: `#8F034F`,
        display: `minimal-ui`,
        icon: 'src/images/icon.jpg'
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`), require(`autoprefixer`)]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cairo`,
            variants: [`700`]
          },
          {
            family: `Roboto`,
            variants: [`400`, `700`]
          }
        ]
      }
    }
  ]
};
