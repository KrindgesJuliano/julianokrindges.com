import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function Content({ children }) {
  return <S.Container>{children}</S.Container>
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
}
