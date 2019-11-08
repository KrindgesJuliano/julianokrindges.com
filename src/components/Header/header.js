import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styles'

const Header = ({ siteTitle }) => (
  <S.Header>
    <S.Main>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
