import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import BlogItem from '../components/BlogItem/index'
import SEO from '../components/seo'
import Layout from '../components/Layout/index'

export const BlogListQuery = graphql`
  query PostList {
    allMarkdownRemark(
      limit: 10
      sort: { fields: frontmatter___date, order: DESC }
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

const BlogListPage = ({ data, pageContext }) => {
  const allPostList = useStaticQuery(BlogListQuery)
  const list = allPostList.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      {list.map(({ node }, i) => (
        <BlogItem
          key={i}
          date={node.frontmatter.date}
          title={node.frontmatter.title}
          description={node.frontmatter.description}
          tags={node.frontmatter.tags}
          timeToRead={node.timeToRead}
          slug={node.fields.slug}
        />
      ))}
    </Layout>
  )
}

export default BlogListPage
