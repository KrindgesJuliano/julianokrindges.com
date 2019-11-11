import React from 'react'

import Layout from '../components/Layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Author from '../components/Author'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Bem Vindo</h1>
    <Author />
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
