import styled from 'styled-components'

export const BlogItem = styled.div`
  background: none;
  height: 200px;
  min-width: 400px;
  position: relative;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;

  &::after {
    content: ' ';
    background: tomato;
    right: 0;
    bottom: -10px;
    width: 100%;
    height: 4px;
  }
`

export const Description = styled.div`
  font-size: 0.9rem;
  margin-top: 10px;
`

export const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  background: tomato;
  min-height: 30px;
  min-width: 150px;
  padding: 5px 20px 5px;
  clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%);
  border-radius: 0 0 8px 0;
`

export const Footer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 40px;
  min-height: 30px;
`
