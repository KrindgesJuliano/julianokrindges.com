import styled from 'styled-components'

export const Container = styled.header`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: '';
    background: #999;
    position: absolute;
    top: calc(100% + 15px);
    height: 1px;
    bottom: 0;
    width: 100%;
  }

  > span {
    display: flex;
  }
`

export const Title = styled.h1.attrs({
  itemProp: 'name',
})`
  font-size: 3rem;
  margin-top: 20px;
  font-weight: bold;
`

export const Description = styled.h2.attrs({
  itemProp: 'description',
})`
  font-size: 1.2rem;
  line-height: 1.2rem;
  color: #666;
`

export const DateTime = styled.div`
  font-size: 0.9rem;
  margin: 10px 0 30px;
  color: #666;
  line-height: 1rem;
`
