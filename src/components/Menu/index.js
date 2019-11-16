import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as S from './styles'

import menuLinks from './content'

export default function Menu() {
  return (
    <S.Menu>
      {menuLinks.map((link, i) => (
        <AniLink
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          cover
          bg="#fff"
          direction="down"
          duration={1}
          to={link.url}
          activeClassName="active"
        >
          {link.label}
        </AniLink>
      ))}
    </S.Menu>
  )
}
