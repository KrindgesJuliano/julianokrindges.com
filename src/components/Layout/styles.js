import styled from 'styled-components'

export const Layout = styled.section`
  background-color: #fff;
  display: block;
  margin-top: 100px;
`

export const Main = styled.main.attrs({
  role: 'main',
})`
  margin: 0 auto;
  min-height: 90vh;
  max-width: 1366px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
