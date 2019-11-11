import styled from 'styled-components'
import { darken } from 'polished'

export const Menu = styled.nav`
  display: flex;
  align-self: center;

  > a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 300;
    color: #fff;
    transition: color 0.5s ease;
    padding: 3px 0;
    width: 70px;

    &.active {
      color: tomato;
    }

    &:hover {
      color: tomato;

      &::after,
      &::before {
        width: 100%;
        left: 0;
      }
    }

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: calc(100% + 4px);
      width: 0;
      right: 0;
      height: 3px;
    }

    &::before {
      transition: width 0.4s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
      background: #2196f3;
    }

    &::after {
      transition: width 0.2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
      background: #f44336;
    }
  }
`
