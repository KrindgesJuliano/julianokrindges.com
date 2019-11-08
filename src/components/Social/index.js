import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as S from './styles'

export default function Social() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              githubLink
              linkedinLink
            }
          }
        }
      }
    `
  )

  return (
    <S.Social>
      <S.SocialItem href={site.siteMetadata.social.githubLink} title="Github">
        <S.SocialGithub />
      </S.SocialItem>
      <S.SocialItem
        href={site.siteMetadata.social.linkedinLink}
        title="Linkedin"
      >
        <S.SocialLinkedin />
      </S.SocialItem>
    </S.Social>
  )
}
