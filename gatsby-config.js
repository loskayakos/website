module.exports = {
  siteMetadata: {
    title: `Los Kayakos`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true, FAST_DEV: true },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },

    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/static/fonts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
  ],
  mapping: {
    'MarkdownRemark.frontmatter.prices_list_relations': `MarkdownRemark.frontmatter.prices_list_id`,
    'MarkdownRemark.frontmatter.prices': `MarkdownRemark.frontmatter.price_id`,
    'MarkdownRemark.frontmatter.reservation_steps': `MarkdownRemark.frontmatter.reservation_step_id`,
    'MarkdownRemark.frontmatter.booking': `MarkdownRemark.frontmatter.reservation_id`,
  },
}
