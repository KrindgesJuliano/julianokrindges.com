import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import PostList from '../components/PostsList'
import About from '../sections/About'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Bem Vindo</h1>
    <About />
    <PostList />
  </Layout>
)

export default IndexPage
