import React from 'react'
import { graphql } from 'gatsby'

import BlogItem from '../components/BlogItem'
import SEO from '../components/seo'
import Layout from '../components/Layout'

export const BlogListQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            description
            title
            tags
          }
          timeToRead
        }
      }
    }
  }
`

export default function BlogList(props) {
  const list = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      {list.map(({ node }, i) => (
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
