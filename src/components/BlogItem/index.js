import React from 'react'

import * as S from './styles'

import ItemBox from '../ItemBox'

export default function BlogItem({
  slug,
  date,
  timeToRead,
  title,
  tags,
  description,
}) {
  return (
    <ItemBox>
      <S.BlogItem
        to={`/${slug}`}
        cover
        direction="down"
        duration={1}
        title={title}
      >
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.TimeToRead>{timeToRead}</S.TimeToRead>
          <S.Footer>
            <span>{tags}</span>
            <div>{date}</div>
          </S.Footer>
        </S.Content>
      </S.BlogItem>
    </ItemBox>
  )
}
