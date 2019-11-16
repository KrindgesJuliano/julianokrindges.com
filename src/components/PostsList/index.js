import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BlogItem from '../BlogItem'

import * as S from './styles'

const blogListQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2
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

export default function PostList({ data }) {
  const allPostList = useStaticQuery(blogListQuery)
  const list = allPostList.allMarkdownRemark.edges

  return (
    <S.PostList>
      <S.Title>Ultimos Posts do Blog</S.Title>
      <S.Nav>
        {list.map(({ node }, i) => (
          <BlogItem
            key={i}
            date={node.frontmatter.date}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            tags={node.frontmatter.tags}
            timeToRead={node.timeToRead}
          />
        ))}
      </S.Nav>
    </S.PostList>
  )
}
