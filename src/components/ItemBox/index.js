import React from 'react'
import PropTypes from 'prop-types'

import { Box } from './styles'

export default function ItemBox({ children }) {
  return <Box>{children}</Box>
}

ItemBox.propTypes = {
  children: PropTypes.node.isRequired,
}
