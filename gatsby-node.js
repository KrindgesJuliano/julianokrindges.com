/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

const path = require(`path`)
const _ = require('lodash')

const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogList = path.resolve(`./src/Templates/blog-list.js`)
  const blogPost = path.resolve(`./src/Templates/post.js`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
                description
                title
                tags
              }
            }
            next {
              fields {
                slug
              }
              frontmatter {
                title
                date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                title
                date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
              }
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    console.log(result.errors)
    return
  }

  const posts = result.data.allMarkdownRemark.edges

  // Create blog page

  posts.forEach(({ node, next, previous }) => {
    const { slug } = node.fields
    createPage({
      path: slug,
      component: blogPost,
      context: {
        slug,
        previous: next,
        next: previous,
      },
    })
  })

  // create blog post list pages
  const PAGE_SIZE = 10

  const chunks = _.chunk(posts, PAGE_SIZE)

  chunks.forEach((chunk, index) => {
    createPage({
      path: index === 0 ? `/blog/` : `blog/page/${index + 1}`,
      component: blogList,
      context: {
        skip: PAGE_SIZE * index,
        limit: PAGE_SIZE,
        pageNumber: index + 1,
        hasNextPage: index !== chunks.length - 1,
        nextPageLink: `/blog/page/${index + 2}`,
      },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `blog/` })
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    })
  }
}
