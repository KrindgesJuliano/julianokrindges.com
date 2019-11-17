import styled from 'styled-components'

export const Box = styled.div`
  position: relative;
  display: block;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  padding: 5px;
  border-radius: 8px;
  background: #fff;
  margin: 10px;

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`
