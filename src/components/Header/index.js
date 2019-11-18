import PropTypes from 'prop-types'
import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Menu from '../Menu'

import * as S from './styles'

const Header = ({ siteTitle }) => (
  <S.Header>
    <S.Main>
      <AniLink
        cover
        bg="#fff"
        direction="down"
        duration={1}
        to="/"
        title="Voltar para home"
      >
        <img
          src="https://avatars1.githubusercontent.com/u/16239598?v=4.jpg"
          alt={siteTitle}
        />
        {siteTitle}
      </AniLink>

      <S.Links>
        <Menu />
      </S.Links>
    </S.Main>
  </S.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
