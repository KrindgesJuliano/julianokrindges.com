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
