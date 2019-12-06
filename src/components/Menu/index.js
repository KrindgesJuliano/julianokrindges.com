import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { SectionLink } from 'react-scroll-section'

import * as S from './styles'

export default function Menu() {
  return (
    <S.Menu>
      <AniLink
        cover
        bg="#fff"
        direction="down"
        duration={1}
        to="#"
        activeClassName="active"
      >
        <S.Item>Contato</S.Item>
      </AniLink>
      <SectionLink section="lab">
        {link => (
          <S.Item onClick={link.onClick} selected={link.isSelected}>
            Projetos
          </S.Item>
        )}
      </SectionLink>
    </S.Menu>
  )
}
