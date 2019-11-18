import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import Author from '../components/Author'
import PostList from '../components/PostsList'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Bem Vindo</h1>
    <Author />
    <PostList />
  </Layout>
)

export default IndexPage
