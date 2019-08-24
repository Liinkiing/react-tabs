import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {createPortal} from 'react-dom'
import {AnimatePresence, motion, MotionProps} from 'framer-motion'

interface Props {
  readonly isActive?: boolean
  readonly id?: string,
  readonly initial?: Pick<MotionProps, 'initial'>,
  readonly animate?: Pick<MotionProps, 'animate'>,
  readonly exit?: Pick<MotionProps, 'exit'>,
}

const ContentInner = styled.div<Pick<Props, 'isActive'>>`
  display: none;
`

const Content: React.FC<Props> = ({ children, isActive, initial, id, animate, exit }) => {
  const portal = React.useRef<HTMLDivElement>()
  const [shouldDisplay, setShouldDisplay] = useState(false)
  useEffect(() => {
    portal.current = document.querySelector<HTMLDivElement>(`.tabs__content#${id}`) || undefined
    setShouldDisplay(true)
  }, [])
  if (!shouldDisplay) {
    return null
  }
  return isActive && portal.current ?
    createPortal(<AnimatePresence>
      <motion.div
        initial={initial as unknown as any}
        animate={animate as unknown as any}
        exit={exit as unknown as any}
      >
        {children}
      </motion.div>
    </AnimatePresence>, portal.current) :
    <ContentInner>{children}</ContentInner>
}

export default Content
