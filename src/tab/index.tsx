import * as React from 'react'
import styled from 'styled-components'
import Content from './Content'
import Title from './Title'

interface Props {
  readonly isActive?: boolean,
  readonly onClick?: () => void,
}

export type StyledProps = Pick<Props, 'isActive'>

const TabInner = styled.div.attrs({
  className: 'tab'
})<StyledProps>`
  ${(props) => props.isActive ? 'opacity: 1;' : 'opacity: 0.5;'};
  display: flex;
  flex-direction: column;
`

const Tab: React.FC<Props> & { Content: typeof Content } & { Title: typeof Title } = ({children, isActive, onClick}) => {
  const elements = React.useMemo(
    () => React.Children.toArray(children).map((el: any) =>
      React.cloneElement(el, {isActive})
    ),
    [children, isActive]
  )
  return (
    <TabInner isActive={isActive!} onClick={onClick}>
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
