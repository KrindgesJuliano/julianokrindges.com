import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import ItemBox from '../ItemBox'

import * as S from './styles'

export default function BlogItem({
  slug,
  date,
  timeToRead,
  title,
  tags,
  description,
}) {
  return (
    <S.BlogItem>
      <AniLink
        to={`/${slug}`}
        cover
        bg="#fff"
        direction="down"
        duration={1}
        title={title}
      >
        <ItemBox>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Footer>
            <S.Time>
              {date}
              <span> - {timeToRead} MIN </span>
            </S.Time>
          </S.Footer>
        </ItemBox>
      </AniLink>
    </S.BlogItem>
  )
}

BlogItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  timeToRead: PropTypes.number,
  tags: PropTypes.array,
  description: PropTypes.string,
}
