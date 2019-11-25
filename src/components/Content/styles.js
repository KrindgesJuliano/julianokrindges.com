import styled from 'styled-components'
import media from 'styled-media-query'

import * as V from '../../Styles/variables'
import * as T from '../../Styles/typography'

export const Container = styled.article`
  width: 90%;
  margin: 0 auto;
  ${T.Text1}

  h1 {
    ${T.Heading1}
  }

  h2 {
    ${T.Heading1}
  }

  p {
    font-size: 1rem;
  }

  a {
    ${T.Link}
  }

  blockquote {
    ${T.Heading3}
    border-left: ${V.Space.xxs} solid var(--highlightColor);
    font-style: italic;
    overflow-wrap: break-word;
    padding-bottom:  ${V.Space.sm};
    padding-left: ${V.Space.default};
    padding-top:  ${V.Space.sm};
  }

  ol {
    list-style-type: decimal;
  }
  ul {
    list-style-type: disc;
  }
  ol, ul {
    padding-left: 2.5rem;
  }

  img,
  .gatsby-resp-image-wrapper {
    width: 100%;
    & + em {
      font-size: 1.4rem;
    }
  }

  
  hr {
    background-color: var(--borderColor);
    border: 0;
    height: 1px;
    margin-bottom: ${V.Space.default};
    margin-top: ${V.Space.default};
  }
  
  .support-title {
    ${T.Subtitle1}
  }
`
