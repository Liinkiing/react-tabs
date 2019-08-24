import * as React from 'react'
import styled, {css} from 'styled-components'
import {MotionProps} from 'framer-motion'
import {makeId} from './utils'

interface ITabsContext {
  selectedTabIndex: number
}

interface Props {
  readonly stretchTabsTitle?: boolean
  readonly initialTabIndex?: number
  readonly verticalLayout?: boolean
  readonly initial?: Pick<MotionProps, 'initial'>,
  readonly animate?: Pick<MotionProps, 'animate'>,
  readonly exit?: Pick<MotionProps, 'exit'>,
}

const TabsOuter = styled.div<Pick<Props, 'verticalLayout'>>`
  color: black;
  ${(props) => props.verticalLayout && css`
    display: flex;
    & .tabs__content {
      flex: 1;
    }
  `}
`

const TabsInner = styled.div<Pick<Props, 'stretchTabsTitle' | 'verticalLayout'>>`
  display: flex;
  position: relative;
  & > .tab:first-of-type {
    border-top-left-radius: 3px;
  }
  & > .tab:last-of-type {
    ${(props) => props.verticalLayout ? css`
      border-bottom-left-radius: 3px;
    ` : css`
      border-top-right-radius: 3px;
    `}
  }
  ${(props) => props.stretchTabsTitle && css`
    & > .tab {
      flex: 1;
    }
  `}
  ${(props) => props.verticalLayout && css`
    flex-direction: column;
  `}
`

const TabsContent = styled.div.attrs({
  className: 'tabs__content'
})<Pick<Props, 'stretchTabsTitle' | 'verticalLayout'>>`
  padding: 20px;
  background: whitesmoke;
  border-bottom-right-radius: 3px;
  ${(props) => !props.stretchTabsTitle && css`
    border-top-right-radius: 3px;
  `};
  ${(props) => !props.verticalLayout && css`
    border-bottom-left-radius: 3px;
  `};
  box-shadow: 0 6px 30px rgba(0,0,0,0.14);
  overflow: hidden;
`

export const TabsContext = React.createContext<ITabsContext>({selectedTabIndex: 0})

const Tabs: React.FC<Props> = ({children, initialTabIndex, stretchTabsTitle, initial, exit, animate, verticalLayout, ...rest}) => {
  const id = React.useMemo(() => makeId(), [])
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(initialTabIndex!)
  const elements = React.useMemo(
    () => React.Children.toArray(children).map((el: any, index: number) =>
      React.cloneElement(el, {
        ...el.props,
        isActive: selectedTabIndex === index,
        onClick: () => { setSelectedTabIndex(index) },
        initial,
        exit,
        id,
        animate
      })
    ),
    [children, selectedTabIndex]
  )
  return (
    <TabsContext.Provider value={{selectedTabIndex}}>
      <TabsOuter verticalLayout={verticalLayout} {...rest}>
        <TabsInner verticalLayout={verticalLayout} stretchTabsTitle={stretchTabsTitle}>
          {elements}
        </TabsInner>
        <TabsContent id={id} verticalLayout={verticalLayout} stretchTabsTitle={stretchTabsTitle}/>
      </TabsOuter>
    </TabsContext.Provider>
  )
}

Tabs.defaultProps = {
  stretchTabsTitle: false,
  verticalLayout: false,
  initialTabIndex: 0,
  initial: {opacity: 0, x: 40},
  animate: {opacity: 1, x: 0},
  exit: {opacity: 0, x: 40}
} as Partial<Props>


export default Tabs
