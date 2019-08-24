import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {createPortal} from 'react-dom'

interface Props {
  readonly isActive?: boolean
}

const ContentInner = styled.div<Pick<Props, 'isActive'>>`
  display: none;
`

const Content: React.FC<Props> = ({ children, isActive }) => {
  const portal = React.useRef<HTMLDivElement>()
  const [shouldDisplay, setShouldDisplay] = useState(false)
  useEffect(() => {
    portal.current = document.querySelector<HTMLDivElement>('.tabs__content') || undefined
    setShouldDisplay(true)
  }, [])
  if (!shouldDisplay) {
    return null
  }
  return isActive && portal.current ?
    createPortal(children, portal.current) :
    <ContentInner>{children}</ContentInner>
}

export default Content
