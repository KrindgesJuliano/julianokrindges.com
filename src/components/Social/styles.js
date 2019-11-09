import styled from 'styled-components'
import { LinkedinIn, GithubAlt } from 'styled-icons/fa-brands'

const Icon = `
  display: block;
  height: 1.4rem;
  width: 1.4rem;
`

export const Social = styled.div`
  display: flex;
`

export const SocialItem = styled.a.attrs(props => ({
  href: props.href,
  title: props.title,
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  align-items: center;
  display: inline-flex;
  color: #fff;
  padding: 0 10px 0 10px;

  &:focus,
  &:hover {
    color: tomato;
    border: none;
    transition: 0.4s ease-in-out;
    transform: scale(1.2);
  }
`

export const SocialGithub = styled(GithubAlt)`
  ${Icon}
`

export const SocialLinkedin = styled(LinkedinIn)`
  ${Icon}
`
