import styled from 'styled-components'

import * as V from '../../Styles/variables'

export const Box = styled.div`
  position: relative;
  display: block;
  box-shadow: ${V.BoxShadow.defaultBox};
  transition: ${V.Transition.default};
  top: 0;
  height: 100%;
  padding: 10px;
  border-radius: 8px;
  background: ${V.Colors.whiteSolid};
  margin: 10px;

  &:hover {
    top: -10px;
    box-shadow: ${V.BoxShadow.boxTransformation};
  }
`
