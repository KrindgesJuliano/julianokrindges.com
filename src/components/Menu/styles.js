import styled from 'styled-components'

export const Menu = styled.nav`
  display: flex;
  align-self: center;
`
export const Item = styled.li`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0;
  padding: 40px 10px;
  font-weight: bold;
  font-size: 20px;
  user-select: none;
  color: ${props => (props.selected ? '#fff' : '#fff')};
  border-top: 5px solid ${props => (props.selected ? '#ff7e67' : 'transparent')};
`
