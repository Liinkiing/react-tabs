import * as React from 'react'
import styled from 'styled-components'
import Content from './Content'
import Title from './Title'
import {MotionProps} from 'framer-motion'

interface Props {
  readonly isActive?: boolean,
  readonly onClick?: () => void,
  readonly id?: string,
  readonly initial?: Pick<MotionProps, 'initial'>,
  readonly animate?: Pick<MotionProps, 'animate'>,
  readonly exit?: Pick<MotionProps, 'exit'>,
}

export type StyledProps = Pick<Props, 'isActive'>

const TabInner = styled.div.attrs({
  className: 'tab'
})<StyledProps>`
  ${(props) => props.isActive ? 'opacity: 1;' : 'opacity: 0.5;'};
  display: flex;
  flex-direction: column;
`

const Tab: React.FC<Props> & { Content: typeof Content } & { Title: typeof Title } = ({children, isActive, id, onClick, animate, exit, initial, ...rest}) => {
  const elements = React.useMemo(
    () => React.Children.toArray(children).map((el: any) =>
      React.cloneElement(el, {
        ...el.props,
        animate,
        exit,
        id,
        initial,
        isActive
      })
    ),
    [children, isActive]
  )
  return (
    <TabInner {...rest} isActive={isActive!} onClick={onClick}>
      {elements}
    </TabInner>
  )
}

Tab.defaultProps = {
  isActive: false
}

Tab.Content = Content

Tab.Title = Title

export default Tab
