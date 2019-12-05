import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function Section({ children, id }) {
  return (
    <Section id={id}>
      <S.Container>{children}</S.Container>
    </Section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}
