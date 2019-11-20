import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import GridTemplate from '../components/GridTemplate'

import PostHeader from '../components/PostHeader/index'
import Content from '../components/Content'

export default function blogPost({ data }) {
  const { html } = data.markdownRemark
  const { title, tags, date, description } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={title} description={description} />
      <GridTemplate>
        <PostHeader
          tags={tags}
          title={title}
          date={date}
          description={description}
        />

        <Content>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Content>
      </GridTemplate>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        title
        tags
      }
    }
  }
`
