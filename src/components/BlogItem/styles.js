import styled from 'styled-components'

export const BlogItem = styled.div`
  background: none;
  height: 300px;
  width: 300px;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;

  &:after {
    content: ' ';
    background: tomato;
    right: 0;
    width: 100%;
    height: 4px;
    bottom: -5px;
  }
`

export const Description = styled.div``

export const TimeToRead = styled.div``

export const Footer = styled.div``

export const Content = styled.div``
