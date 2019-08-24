import React from 'react'
import styled from 'styled-components'

interface Props {
  readonly isActive?: boolean
}

const TitleInner = styled.div`
  padding: 10px;
  border-radius: inherit;
  cursor: pointer;
  height: 100%;
  transition: all 0.15s;
  background: whitesmoke;
  &:hover {
    opacity: 0.8;
  }
`

const Title: React.FC<Props> = ({ children, ...rest }) => {

  return (
    <TitleInner { ...rest }>
      {children}
    </TitleInner>
  )
}

export default Title
