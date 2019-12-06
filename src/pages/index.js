import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import PostList from '../components/PostsList'
import Home from '../sections/Home'
import Projects from '../sections/Projects'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Projects />
    <PostList />
  </Layout>
)

export default IndexPage
