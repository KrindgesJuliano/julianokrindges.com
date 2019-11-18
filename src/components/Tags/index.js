import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function Tags({ children }) {
  return <S.Container>#{children}</S.Container>
}

Tags.propTypes = {
  children: PropTypes.node.isRequired,
}
