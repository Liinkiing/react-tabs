import React from 'react'
import styled from 'styled-components'

interface Props {
  readonly isActive?: boolean
}

const TitleInner = styled.div`
  padding: 10px;
  background: wheat;
  cursor: pointer;
  height: 100%;
  transition: all 0.15s;
`

const Title: React.FC<Props> = ({ children, ...rest }) => {

  return (
    <TitleInner { ...rest }>
      {children}
    </TitleInner>
  )
}

export default Title
