import React from 'react'

import * as S from './styles'

const BlogItem = ({ slug, date, timeToRead, title, tags, description }) => {
  return (
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
        <S.Tags>{tags}</S.Tags>
      </S.Content>
    </S.BlogItem>
  )
}

export default BlogItem
