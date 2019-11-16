import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import BlogItem from '../components/BlogItem/index'
import SEO from '../components/seo'
import Layout from '../components/Layout/index'

export const BlogListQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            draft
          }
          timeToRead
        }
      }
    }
  }
`

const BlogListPage = ({ data, pageContext }) => {
  const list = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      {get(data, list, []).map((node, i) => (
        <BlogItem
          key={i}
          slug={node.fields.slug}
          date={node.frontmatter.date}
          title={node.frontmatter.title}
          description={node.frontmatter.description}
          tags={node.frontmatter.tags}
          timeToRead={node.timeToRead}
        />
      ))}
    </Layout>
  )
}

export default BlogListPage
