import React from 'react'
import PropTypes from 'prop-types'

import Tags from '../Tags'

import { Container, Title, Description, DateTime } from './styles'

export default function PostHeader({ tags, title, description, date }) {
  return (
    <Container>
      <span>
        {tags.map(tag => (
          <Tags key={tag}>{tag}</Tags>
        ))}
      </span>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <DateTime>Publicado em {date}</DateTime>
    </Container>
  )
}

PostHeader.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  tags: PropTypes.array.isRequired,
}
