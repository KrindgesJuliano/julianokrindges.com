import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
  background-color: #333;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-size: 1.3rem;
  font-family: "Nunito", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

a{
  text-decoration: none;
}

ul{
  list-style: none;
}

button {
  cursor: pointer;
}
`
