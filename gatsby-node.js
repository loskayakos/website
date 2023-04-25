const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions

  const offerResult = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { layout: { eq: "offer-details" } } }, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)
  const offers = offerResult.data.allMarkdownRemark.edges

  offers.forEach(offer => {
    createPage({
      path: 'oferta/' + offer.node.frontmatter.slug,
      component: path.resolve('./src/templates/OfferTemplate.js'),
      context: {
        slug: offer.node.frontmatter.slug,
        fileAbsolutePath: offer.node.fileAbsolutePath,
      },
    })
  })

  const preparePage = async (layout, path, template, hasParam) => {
    const result = await graphql(`
      {
        allMarkdownRemark(
          filter: {
            frontmatter: { layout: { eq: "${layout}" } }
          }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
              fileAbsolutePath
            }
          }
        }
      }
    `)

    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    // console.log(result.data.allMarkdownRemark.edges)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const name = node.fileAbsolutePath
        .split('/')
        .pop()
        .replace('.md', '')
        .replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})-/, '')
      // console.log({
      //   path: path + "/" + (node.frontmatter.slug || name),
      //   component: template,
      //   context: {
      //     // additional data can be passed via context
      //     fileAbsolutePath: node.fileAbsolutePath,
      //   },
      // })

      createPage({
        path: path + '/' + (node.frontmatter.slug || name),
        component: template,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          fileAbsolutePath: node.fileAbsolutePath,
        },
      })
    })
  }
  exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
      createNodeField({
        node,
        name: `slug`,
        value: '/' + node.fileAbsolutePath.split('/').splice(-2).join('/').replace('.md', ''),
      })
    }
  }
}
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;

//   const typeDefs = `
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//     }

//     type Frontmatter {
//       kajaki: [Category] @link(by: "slug")
//     }
//     type Category implements Node {
//       allMarkdownRemark: [MarkdownRemark] @link(by: "frontmatter.slug", from: "slug")
//     }
//   `
//   createTypes(typeDefs)
// }
exports.onCreateWebpackConfig = ({ stage, actions, getConfig, loaders, plugins }) => {
  const config = getConfig()
  const miniCssExtractPluginIndex = config.plugins.findIndex(
    plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
  )

  if (miniCssExtractPluginIndex > -1) {
    // remove miniCssExtractPlugin from plugins list
    config.plugins.splice(miniCssExtractPluginIndex, 1)

    // re-add mini-css-extract-plugin
    if (stage === 'build-javascript') {
      config.plugins.push(
        plugins.extractText({
          filename: `[name].[contenthash].css`,
          chunkFilename: `[name].[contenthash].css`,
          ignoreOrder: true,
        })
      )
    } else {
      config.plugins.push(
        plugins.extractText({
          filename: `[name].css`,
          chunkFilename: `[id].css`,
          ignoreOrder: true,
        })
      )
    }
  }
  actions.replaceWebpackConfig(config)
}
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node  {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      number_step: String!
    }
    `
  createTypes(typeDefs)
}
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type markdownRemark implements Node {

//         frontmatter: Frontmatter
//     }

//     type FrontMatter {

//       prices: [Prices]
//     }

//     type Prices {
//       frontmatter: Frontmatter
//     }
//     type Frontmatter {
//       price_1: String
//       price_2: String
//       price_3: String
//       name_price: String
//     }
// `
//   createTypes(typeDefs)
// }
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type  MarkdownRemarkFrontmatter implements Node @dontInfer {
//       price_3: Number
//     }
//   `
//   createTypes(typeDefs)
// }
