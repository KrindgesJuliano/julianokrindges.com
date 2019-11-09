import React from 'react'

import Layout from '../components/Layout'
import Author from '../components/Author'

// import { Container } from './styles';

export default function About() {
  return (
    <Layout>
      <Author fullText={() => fullText} />
    </Layout>
  )
}
