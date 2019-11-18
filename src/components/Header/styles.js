import styled from 'styled-components'

export const Header = styled.header`
  background: #263859;
  display: block;
  left: 0;
  position: fixed;
  right: 0;
  text-transform: capitalize;
  top: 0;
  width: 100%;
`

export const Main = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  height: 57px;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  > a {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1.7rem;

    text-decoration: none;

    img {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      margin: 10px;
    }
  }
`

export const Links = styled.div`
  display: flex;
`
export const Separator = styled.hr`
  height: 25px;
  margin: 0 10px 0 10px;
  width: 1px;
  align-self: center;
`
