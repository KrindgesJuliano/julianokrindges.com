import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export default function BlogList(props) {
  const list = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <div />
    </Layout>
  )
}

export const BlogListQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
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
          timeToRead
        }
      }
    }
  }
`
