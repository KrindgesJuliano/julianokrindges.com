import React from 'react'

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
    <S.BlogItem
      to={`${slug}`}
      cover
      direction="down"
      duration={1}
      title={title}
    >
      <ItemBox>
        <S.Title>{title}</S.Title>
        <span>{tags}</span>
        <S.Description>{description}</S.Description>
        <S.Footer>
          <S.Time>
            {date}
            <span> - {timeToRead} MIN </span>
          </S.Time>
        </S.Footer>
      </ItemBox>
    </S.BlogItem>
  )
}
