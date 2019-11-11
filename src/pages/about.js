import React from 'react'

import SEO from '../components/seo'

import Layout from '../components/Layout'
import Author from '../components/Author'

// import { Container } from './styles';

export default function About() {
  return (
    <Layout>
      <SEO title="about" />
      <Author fullText={() => fullText} />
    </Layout>
  )
}
