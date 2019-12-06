import React from 'react'
import PropTypes from 'prop-types'
import { Section } from 'react-scroll-section'

import * as S from './styles'

export default function SectionContainer({ children, id }) {
  return (
    <Section id={id} style={{ position: 'relative' }}>
      <S.Container>{children}</S.Container>
    </Section>
  )
}

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}
