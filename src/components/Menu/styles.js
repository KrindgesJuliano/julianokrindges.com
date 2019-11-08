import styled from 'styled-components'

export const Menu = styled.nav`
  display: flex;
  align-self: center;

  > a {
    align-items: center;
    color: #fff;
    display: inline-flex;
    font-size: 1.3rem;
    padding: 0 10px 0 10px;

    text-decoration: none;
    will-change: transform;

    &:after {
      background-color: tomato;
      content: '';
      height: 2px;
      left: 0;
      margin-top: 3px;
      top: calc(100% - 2px);
      position: absolute;
      transform: scaleX(0);
      transition: transform 0.6s;
      width: 100%;
    }

    &:active {
      color: tomato;
      border: none;
    }

    &:focus,
    &:hover {
      &:after {
        transform: scaleX(1);
      }
      color: tomato;
      border: none;
      transition: 0.3s ease-in-out;
    }
  }
`
