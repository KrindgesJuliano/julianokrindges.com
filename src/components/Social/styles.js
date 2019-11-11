import styled from 'styled-components'
import { LinkedinIn, GithubAlt } from 'styled-icons/fa-brands'

const Icon = `
  display: block;
  height: 1.3rem;
  width: 1.3rem;
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
  width: 50px;
  padding: 0 10px 0 10px;
  justify-content: center;
  transition: color 0.5s ease;

  &:focus,
  &:hover {
    color: tomato;
  }
`

export const SocialGithub = styled(GithubAlt)`
  ${Icon}
`

export const SocialLinkedin = styled(LinkedinIn)`
  ${Icon}
`
