import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import Header from '../Header'
import Container from '../Container'

import * as S from './styles'
import GlobalStyles from '../../Styles/global'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <S.Layout>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Header siteTitle={data.site.siteMetadata.author} />
      </TransitionPortal>
      <S.Main>
        <Container>{children}</Container>
      </S.Main>
    </S.Layout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
